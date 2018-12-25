pub mod debug_objects;
pub mod follow;
pub mod logs;
pub mod neighborhood_summary;
pub mod search;
pub mod show_activity;
pub mod show_associated;
pub mod show_route;
pub mod turn_cycler;
pub mod warp;

use crate::objects::{Ctx, ID};
use crate::plugins::{Plugin, PluginCtx};
use crate::render::DrawMap;
use abstutil::Timer;
use ezgui::{Color, GfxCtx};
use map_model::Map;

pub struct ViewMode {
    search: Option<search::SearchState>,
    ambient_plugins: Vec<Box<Plugin>>,
}

impl ViewMode {
    pub fn new(map: &Map, draw_map: &DrawMap, timer: &mut Timer) -> ViewMode {
        ViewMode {
            search: None,
            ambient_plugins: vec![
                Box::new(debug_objects::DebugObjectsState::new()),
                Box::new(follow::FollowState::new()),
                Box::new(neighborhood_summary::NeighborhoodSummary::new(
                    map, draw_map, timer,
                )),
                // TODO Could be a little simpler to instantiate this lazily, stop representing
                // inactive state.
                Box::new(show_activity::ShowActivityState::new()),
                Box::new(show_associated::ShowAssociatedState::new()),
                Box::new(show_route::ShowRouteState::new()),
                Box::new(turn_cycler::TurnCyclerState::new()),
            ],
        }
    }
}

impl Plugin for ViewMode {
    fn blocking_event(&mut self, ctx: &mut PluginCtx) -> bool {
        if self.search.is_some() {
            if self.search.as_mut().unwrap().blocking_event(ctx) {
                if self.search.as_ref().unwrap().is_blocking() {
                    return true;
                }
            } else {
                self.search = None;
                return false;
            }
        } else if let Some(p) = search::SearchState::new(ctx) {
            self.search = Some(p);
            return true;
        }

        for p in self.ambient_plugins.iter_mut() {
            p.ambient_event(ctx);
        }
        false
    }

    fn draw(&self, g: &mut GfxCtx, ctx: &Ctx) {
        // Always draw these, even when a blocking plugin is active.
        for p in &self.ambient_plugins {
            p.draw(g, ctx);
        }

        if let Some(ref p) = self.search {
            p.draw(g, ctx);
        }
    }

    fn color_for(&self, obj: ID, ctx: &Ctx) -> Option<Color> {
        if let Some(ref p) = self.search {
            if let Some(c) = p.color_for(obj, ctx) {
                return Some(c);
            }
        }

        // First one arbitrarily wins.
        for p in &self.ambient_plugins {
            if let Some(c) = p.color_for(obj, ctx) {
                return Some(c);
            }
        }
        None
    }
}
