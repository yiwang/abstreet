(function() {var implementors = {};
implementors["abstutil"] = [{"text":"impl Sync for FileWithProgress","synthetic":true,"types":[]},{"text":"impl Sync for Manifest","synthetic":true,"types":[]},{"text":"impl Sync for Entry","synthetic":true,"types":[]},{"text":"impl Sync for CmdArgs","synthetic":true,"types":[]},{"text":"impl&lt;K, V&gt; Sync for MultiMap&lt;K, V&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;K: Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;V: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Sync for Counter&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;K, V&gt; Sync for VecMap&lt;K, V&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;K: Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;V: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Sync for Tags","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; !Sync for Timer&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl Sync for Parallelism","synthetic":true,"types":[]},{"text":"impl Sync for ROOT_DIR","synthetic":true,"types":[]},{"text":"impl Sync for ROOT_PLAYER_DIR","synthetic":true,"types":[]},{"text":"impl Sync for Logger","synthetic":true,"types":[]},{"text":"impl Sync for Progress","synthetic":true,"types":[]},{"text":"impl Sync for TimerSpan","synthetic":true,"types":[]},{"text":"impl Sync for TimedFileReader","synthetic":true,"types":[]},{"text":"impl Sync for StackEntry","synthetic":true,"types":[]}];
implementors["convert_osm"] = [{"text":"impl Sync for Options","synthetic":true,"types":[]},{"text":"impl Sync for OnstreetParking","synthetic":true,"types":[]},{"text":"impl Sync for PublicOffstreetParking","synthetic":true,"types":[]},{"text":"impl Sync for PrivateOffstreetParking","synthetic":true,"types":[]},{"text":"impl Sync for OsmExtract","synthetic":true,"types":[]},{"text":"impl Sync for Document","synthetic":true,"types":[]},{"text":"impl Sync for Node","synthetic":true,"types":[]},{"text":"impl Sync for Way","synthetic":true,"types":[]},{"text":"impl Sync for Relation","synthetic":true,"types":[]},{"text":"impl Sync for Elevation","synthetic":true,"types":[]}];
implementors["game"] = [{"text":"impl !Sync for App","synthetic":true,"types":[]},{"text":"impl Sync for ShowLayers","synthetic":true,"types":[]},{"text":"impl Sync for ShowEverything","synthetic":true,"types":[]},{"text":"impl Sync for Flags","synthetic":true,"types":[]},{"text":"impl !Sync for PerMap","synthetic":true,"types":[]},{"text":"impl !Sync for SessionState","synthetic":true,"types":[]},{"text":"impl Sync for PerObjectActions","synthetic":true,"types":[]},{"text":"impl Sync for FindDelayedIntersections","synthetic":true,"types":[]},{"text":"impl Sync for Challenge","synthetic":true,"types":[]},{"text":"impl Sync for HighScore","synthetic":true,"types":[]},{"text":"impl !Sync for ChallengesPicker","synthetic":true,"types":[]},{"text":"impl Sync for ColorScheme","synthetic":true,"types":[]},{"text":"impl Sync for ColorSchemeChoice","synthetic":true,"types":[]},{"text":"impl !Sync for CommonState","synthetic":true,"types":[]},{"text":"impl !Sync for CityPicker","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Sync for ColorDiscrete&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl Sync for ColorLegend","synthetic":true,"types":[]},{"text":"impl Sync for DivergingScale","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Sync for ColorNetwork&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl Sync for ColorScale","synthetic":true,"types":[]},{"text":"impl Sync for HeatmapOptions","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Sync for Grid&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl !Sync for IsochroneViewer","synthetic":true,"types":[]},{"text":"impl !Sync for Minimap","synthetic":true,"types":[]},{"text":"impl !Sync for Navigator","synthetic":true,"types":[]},{"text":"impl !Sync for CrossStreet","synthetic":true,"types":[]},{"text":"impl !Sync for SearchBuildings","synthetic":true,"types":[]},{"text":"impl Sync for Warping","synthetic":true,"types":[]},{"text":"impl !Sync for DebugWarp","synthetic":true,"types":[]},{"text":"impl Sync for CutsceneBuilder","synthetic":true,"types":[]},{"text":"impl Sync for Scene","synthetic":true,"types":[]},{"text":"impl !Sync for CutscenePlayer","synthetic":true,"types":[]},{"text":"impl !Sync for FYI","synthetic":true,"types":[]},{"text":"impl Sync for Layout","synthetic":true,"types":[]},{"text":"impl !Sync for DebugMode","synthetic":true,"types":[]},{"text":"impl !Sync for SearchResults","synthetic":true,"types":[]},{"text":"impl Sync for Actions","synthetic":true,"types":[]},{"text":"impl Sync for ScreenshotTest","synthetic":true,"types":[]},{"text":"impl !Sync for Floodfiller","synthetic":true,"types":[]},{"text":"impl Sync for Source","synthetic":true,"types":[]},{"text":"impl Sync for ObjectDebugger","synthetic":true,"types":[]},{"text":"impl !Sync for PathCounter","synthetic":true,"types":[]},{"text":"impl !Sync for PolygonDebugger","synthetic":true,"types":[]},{"text":"impl Sync for Item","synthetic":true,"types":[]},{"text":"impl !Sync for DevToolsMode","synthetic":true,"types":[]},{"text":"impl !Sync for PopularDestinations","synthetic":true,"types":[]},{"text":"impl !Sync for ViewKML","synthetic":true,"types":[]},{"text":"impl Sync for Object","synthetic":true,"types":[]},{"text":"impl !Sync for ParkingMapper","synthetic":true,"types":[]},{"text":"impl !Sync for ChangeWay","synthetic":true,"types":[]},{"text":"impl Sync for Show","synthetic":true,"types":[]},{"text":"impl Sync for Value","synthetic":true,"types":[]},{"text":"impl !Sync for PolygonEditor","synthetic":true,"types":[]},{"text":"impl !Sync for ScenarioManager","synthetic":true,"types":[]},{"text":"impl !Sync for StoryMapEditor","synthetic":true,"types":[]},{"text":"impl Sync for RecordedStoryMap","synthetic":true,"types":[]},{"text":"impl !Sync for StoryMap","synthetic":true,"types":[]},{"text":"impl !Sync for Marker","synthetic":true,"types":[]},{"text":"impl Sync for Lasso","synthetic":true,"types":[]},{"text":"impl !Sync for Mode","synthetic":true,"types":[]},{"text":"impl !Sync for EditMode","synthetic":true,"types":[]},{"text":"impl !Sync for SaveEdits","synthetic":true,"types":[]},{"text":"impl !Sync for LoadEdits","synthetic":true,"types":[]},{"text":"impl !Sync for ConfirmDiscard","synthetic":true,"types":[]},{"text":"impl !Sync for BulkSelect","synthetic":true,"types":[]},{"text":"impl !Sync for BulkEdit","synthetic":true,"types":[]},{"text":"impl !Sync for ClusterTrafficSignalEditor","synthetic":true,"types":[]},{"text":"impl !Sync for LaneEditor","synthetic":true,"types":[]},{"text":"impl !Sync for RouteEditor","synthetic":true,"types":[]},{"text":"impl !Sync for RoadSelector","synthetic":true,"types":[]},{"text":"impl !Sync for Mode","synthetic":true,"types":[]},{"text":"impl !Sync for StopSignEditor","synthetic":true,"types":[]},{"text":"impl !Sync for TrafficSignalEditor","synthetic":true,"types":[]},{"text":"impl Sync for BundleEdits","synthetic":true,"types":[]},{"text":"impl !Sync for ChangeDuration","synthetic":true,"types":[]},{"text":"impl !Sync for ShowAbsolute","synthetic":true,"types":[]},{"text":"impl !Sync for ShowRelative","synthetic":true,"types":[]},{"text":"impl !Sync for TuneRelative","synthetic":true,"types":[]},{"text":"impl !Sync for SignalPicker","synthetic":true,"types":[]},{"text":"impl !Sync for PreviewTrafficSignal","synthetic":true,"types":[]},{"text":"impl !Sync for ZoneEditor","synthetic":true,"types":[]},{"text":"impl !Sync for Game","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; !Sync for ChooseSomething&lt;T&gt;","synthetic":true,"types":[]},{"text":"impl !Sync for PromptInput","synthetic":true,"types":[]},{"text":"impl !Sync for PopupMsg","synthetic":true,"types":[]},{"text":"impl Sync for DrawBaselayer","synthetic":true,"types":[]},{"text":"impl !Sync for Transition","synthetic":true,"types":[]},{"text":"impl Sync for ID","synthetic":true,"types":[]},{"text":"impl !Sync for InfoPanel","synthetic":true,"types":[]},{"text":"impl Sync for Details","synthetic":true,"types":[]},{"text":"impl Sync for DataOptions","synthetic":true,"types":[]},{"text":"impl Sync for Tab","synthetic":true,"types":[]},{"text":"impl Sync for OpenTrip","synthetic":true,"types":[]},{"text":"impl !Sync for PickLayer","synthetic":true,"types":[]},{"text":"impl !Sync for LayerOutcome","synthetic":true,"types":[]},{"text":"impl !Sync for Elevation","synthetic":true,"types":[]},{"text":"impl !Sync for BikeNetwork","synthetic":true,"types":[]},{"text":"impl !Sync for Static","synthetic":true,"types":[]},{"text":"impl !Sync for CongestionCaps","synthetic":true,"types":[]},{"text":"impl !Sync for Pandemic","synthetic":true,"types":[]},{"text":"impl Sync for Options","synthetic":true,"types":[]},{"text":"impl Sync for SEIR","synthetic":true,"types":[]},{"text":"impl !Sync for Occupancy","synthetic":true,"types":[]},{"text":"impl !Sync for Efficiency","synthetic":true,"types":[]},{"text":"impl Sync for Loc","synthetic":true,"types":[]},{"text":"impl !Sync for PopulationMap","synthetic":true,"types":[]},{"text":"impl Sync for Options","synthetic":true,"types":[]},{"text":"impl !Sync for Backpressure","synthetic":true,"types":[]},{"text":"impl !Sync for Throughput","synthetic":true,"types":[]},{"text":"impl !Sync for CompareThroughput","synthetic":true,"types":[]},{"text":"impl !Sync for TrafficJams","synthetic":true,"types":[]},{"text":"impl Sync for Jam","synthetic":true,"types":[]},{"text":"impl !Sync for Delay","synthetic":true,"types":[]},{"text":"impl !Sync for TransitNetwork","synthetic":true,"types":[]},{"text":"impl Sync for MapLoader","synthetic":true,"types":[]},{"text":"impl !Sync for MapAlreadyLoaded","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; !Sync for FileLoader&lt;T&gt;","synthetic":true,"types":[]},{"text":"impl Sync for Options","synthetic":true,"types":[]},{"text":"impl !Sync for OptionsPanel","synthetic":true,"types":[]},{"text":"impl Sync for TrafficSignalStyle","synthetic":true,"types":[]},{"text":"impl Sync for CameraAngle","synthetic":true,"types":[]},{"text":"impl !Sync for TitleScreen","synthetic":true,"types":[]},{"text":"impl !Sync for MainMenu","synthetic":true,"types":[]},{"text":"impl !Sync for About","synthetic":true,"types":[]},{"text":"impl !Sync for Proposals","synthetic":true,"types":[]},{"text":"impl Sync for Screensaver","synthetic":true,"types":[]},{"text":"impl Sync for DrawOptions","synthetic":true,"types":[]},{"text":"impl Sync for DrawArea","synthetic":true,"types":[]},{"text":"impl !Sync for DrawBike","synthetic":true,"types":[]},{"text":"impl !Sync for DrawBuilding","synthetic":true,"types":[]},{"text":"impl !Sync for DrawBusStop","synthetic":true,"types":[]},{"text":"impl !Sync for DrawCar","synthetic":true,"types":[]},{"text":"impl !Sync for DrawIntersection","synthetic":true,"types":[]},{"text":"impl !Sync for DrawLane","synthetic":true,"types":[]},{"text":"impl !Sync for DrawMap","synthetic":true,"types":[]},{"text":"impl !Sync for AgentCache","synthetic":true,"types":[]},{"text":"impl Sync for UnzoomedAgents","synthetic":true,"types":[]},{"text":"impl !Sync for DrawParkingLot","synthetic":true,"types":[]},{"text":"impl !Sync for DrawPedestrian","synthetic":true,"types":[]},{"text":"impl !Sync for DrawPedCrowd","synthetic":true,"types":[]},{"text":"impl !Sync for DrawRoad","synthetic":true,"types":[]},{"text":"impl Sync for DrawMovement","synthetic":true,"types":[]},{"text":"impl Sync for DrawUberTurnGroup","synthetic":true,"types":[]},{"text":"impl !Sync for SandboxMode","synthetic":true,"types":[]},{"text":"impl !Sync for SandboxControls","synthetic":true,"types":[]},{"text":"impl Sync for BackToMainMenu","synthetic":true,"types":[]},{"text":"impl !Sync for AgentMeter","synthetic":true,"types":[]},{"text":"impl Sync for Actions","synthetic":true,"types":[]},{"text":"impl Sync for DashTab","synthetic":true,"types":[]},{"text":"impl !Sync for CommuterPatterns","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Sync for PanelState&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl Sync for Block","synthetic":true,"types":[]},{"text":"impl Sync for Filter","synthetic":true,"types":[]},{"text":"impl Sync for Loop","synthetic":true,"types":[]},{"text":"impl Sync for BlockSelection","synthetic":true,"types":[]},{"text":"impl Sync for BorderType","synthetic":true,"types":[]},{"text":"impl&lt;T, F, P&gt; !Sync for GenericTripTable&lt;T, F, P&gt;","synthetic":true,"types":[]},{"text":"impl !Sync for ActiveTraffic","synthetic":true,"types":[]},{"text":"impl !Sync for TransitRoutes","synthetic":true,"types":[]},{"text":"impl Sync for ParkingOverhead","synthetic":true,"types":[]},{"text":"impl Sync for Entry","synthetic":true,"types":[]},{"text":"impl Sync for Filters","synthetic":true,"types":[]},{"text":"impl !Sync for TripSummaries","synthetic":true,"types":[]},{"text":"impl Sync for Filter","synthetic":true,"types":[]},{"text":"impl&lt;T, F&gt; !Sync for Table&lt;T, F&gt;","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; !Sync for Column&lt;T&gt;","synthetic":true,"types":[]},{"text":"impl&lt;T, F&gt; !Sync for Filter&lt;T, F&gt;","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; !Sync for Col&lt;T&gt;","synthetic":true,"types":[]},{"text":"impl !Sync for TrafficSignalDemand","synthetic":true,"types":[]},{"text":"impl Sync for Demand","synthetic":true,"types":[]},{"text":"impl Sync for FinishedTripTable","synthetic":true,"types":[]},{"text":"impl Sync for CancelledTripTable","synthetic":true,"types":[]},{"text":"impl Sync for UnfinishedTripTable","synthetic":true,"types":[]},{"text":"impl Sync for FinishedTrip","synthetic":true,"types":[]},{"text":"impl Sync for CancelledTrip","synthetic":true,"types":[]},{"text":"impl Sync for UnfinishedTrip","synthetic":true,"types":[]},{"text":"impl Sync for Filters","synthetic":true,"types":[]},{"text":"impl !Sync for FinalScore","synthetic":true,"types":[]},{"text":"impl Sync for GameplayMode","synthetic":true,"types":[]},{"text":"impl Sync for LoadScenario","synthetic":true,"types":[]},{"text":"impl !Sync for OptimizeCommute","synthetic":true,"types":[]},{"text":"impl !Sync for FixTrafficSignals","synthetic":true,"types":[]},{"text":"impl !Sync for Freeform","synthetic":true,"types":[]},{"text":"impl !Sync for AgentSpawner","synthetic":true,"types":[]},{"text":"impl !Sync for PlayScenario","synthetic":true,"types":[]},{"text":"impl !Sync for EditScenarioModifiers","synthetic":true,"types":[]},{"text":"impl !Sync for ChangeMode","synthetic":true,"types":[]},{"text":"impl !Sync for Tutorial","synthetic":true,"types":[]},{"text":"impl Sync for TutorialPointer","synthetic":true,"types":[]},{"text":"impl !Sync for Stage","synthetic":true,"types":[]},{"text":"impl !Sync for TutorialState","synthetic":true,"types":[]},{"text":"impl Sync for Task","synthetic":true,"types":[]},{"text":"impl !Sync for RoutePreview","synthetic":true,"types":[]},{"text":"impl !Sync for TurnExplorer","synthetic":true,"types":[]},{"text":"impl !Sync for SpeedControls","synthetic":true,"types":[]},{"text":"impl !Sync for TimePanel","synthetic":true,"types":[]},{"text":"impl Sync for SpeedSetting","synthetic":true,"types":[]},{"text":"impl !Sync for JumpToTime","synthetic":true,"types":[]},{"text":"impl !Sync for JumpToDelay","synthetic":true,"types":[]},{"text":"impl !Sync for TimeWarpScreen","synthetic":true,"types":[]},{"text":"impl !Sync for UberTurnPicker","synthetic":true,"types":[]},{"text":"impl !Sync for UberTurnViewer","synthetic":true,"types":[]}];
implementors["geom"] = [{"text":"impl Sync for Angle","synthetic":true,"types":[]},{"text":"impl Sync for Bounds","synthetic":true,"types":[]},{"text":"impl Sync for GPSBounds","synthetic":true,"types":[]},{"text":"impl Sync for Circle","synthetic":true,"types":[]},{"text":"impl Sync for Distance","synthetic":true,"types":[]},{"text":"impl Sync for Duration","synthetic":true,"types":[]},{"text":"impl&lt;K&gt; Sync for FindClosest&lt;K&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;K: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Sync for LonLat","synthetic":true,"types":[]},{"text":"impl Sync for InfiniteLine","synthetic":true,"types":[]},{"text":"impl Sync for Line","synthetic":true,"types":[]},{"text":"impl Sync for Percent","synthetic":true,"types":[]},{"text":"impl Sync for Polygon","synthetic":true,"types":[]},{"text":"impl Sync for Triangle","synthetic":true,"types":[]},{"text":"impl Sync for PolyLine","synthetic":true,"types":[]},{"text":"impl Sync for HashablePt2D","synthetic":true,"types":[]},{"text":"impl Sync for Pt2D","synthetic":true,"types":[]},{"text":"impl Sync for Ring","synthetic":true,"types":[]},{"text":"impl Sync for Speed","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Sync for Histogram&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Sync for Time","synthetic":true,"types":[]},{"text":"impl Sync for ArrowCap","synthetic":true,"types":[]},{"text":"impl Sync for Statistic","synthetic":true,"types":[]}];
implementors["headless"] = [{"text":"impl Sync for MAP","synthetic":true,"types":[]},{"text":"impl Sync for SIM","synthetic":true,"types":[]},{"text":"impl Sync for LOAD","synthetic":true,"types":[]},{"text":"impl Sync for FinishedTrip","synthetic":true,"types":[]},{"text":"impl Sync for Delays","synthetic":true,"types":[]},{"text":"impl Sync for Throughput","synthetic":true,"types":[]},{"text":"impl Sync for AgentPositions","synthetic":true,"types":[]},{"text":"impl Sync for AgentPosition","synthetic":true,"types":[]},{"text":"impl Sync for RoadThroughput","synthetic":true,"types":[]},{"text":"impl Sync for TrafficSignalState","synthetic":true,"types":[]},{"text":"impl Sync for LoadSim","synthetic":true,"types":[]}];
implementors["import_traffic"] = [{"text":"impl Sync for Input","synthetic":true,"types":[]}];
implementors["importer"] = [{"text":"impl Sync for Job","synthetic":true,"types":[]},{"text":"impl Sync for Record","synthetic":true,"types":[]},{"text":"impl Sync for ImporterConfiguration","synthetic":true,"types":[]},{"text":"impl Sync for TripRecord","synthetic":true,"types":[]},{"text":"impl Sync for StopTimeRecord","synthetic":true,"types":[]}];
implementors["kml"] = [{"text":"impl Sync for ExtraShapes","synthetic":true,"types":[]},{"text":"impl Sync for ExtraShape","synthetic":true,"types":[]}];
implementors["map_editor"] = [{"text":"impl !Sync for UI","synthetic":true,"types":[]},{"text":"impl !Sync for State","synthetic":true,"types":[]},{"text":"impl !Sync for Model","synthetic":true,"types":[]},{"text":"impl Sync for ID","synthetic":true,"types":[]},{"text":"impl&lt;ID&gt; Sync for Object&lt;ID&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;ID: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl !Sync for WorldObject","synthetic":true,"types":[]},{"text":"impl&lt;ID&gt; !Sync for World&lt;ID&gt;","synthetic":true,"types":[]}];
implementors["map_model"] = [{"text":"impl Sync for City","synthetic":true,"types":[]},{"text":"impl Sync for EditEffects","synthetic":true,"types":[]},{"text":"impl Sync for EditRoad","synthetic":true,"types":[]},{"text":"impl Sync for MapEdits","synthetic":true,"types":[]},{"text":"impl Sync for PermanentMapEdits","synthetic":true,"types":[]},{"text":"impl Sync for MapConfig","synthetic":true,"types":[]},{"text":"impl Sync for Area","synthetic":true,"types":[]},{"text":"impl Sync for AreaID","synthetic":true,"types":[]},{"text":"impl Sync for Building","synthetic":true,"types":[]},{"text":"impl Sync for BuildingID","synthetic":true,"types":[]},{"text":"impl Sync for NamePerLanguage","synthetic":true,"types":[]},{"text":"impl Sync for BusRoute","synthetic":true,"types":[]},{"text":"impl Sync for BusRouteID","synthetic":true,"types":[]},{"text":"impl Sync for BusStop","synthetic":true,"types":[]},{"text":"impl Sync for BusStopID","synthetic":true,"types":[]},{"text":"impl Sync for Intersection","synthetic":true,"types":[]},{"text":"impl Sync for IntersectionID","synthetic":true,"types":[]},{"text":"impl Sync for Lane","synthetic":true,"types":[]},{"text":"impl Sync for LaneID","synthetic":true,"types":[]},{"text":"impl Sync for ParkingLot","synthetic":true,"types":[]},{"text":"impl Sync for ParkingLotID","synthetic":true,"types":[]},{"text":"impl Sync for DirectedRoadID","synthetic":true,"types":[]},{"text":"impl Sync for Road","synthetic":true,"types":[]},{"text":"impl Sync for RoadID","synthetic":true,"types":[]},{"text":"impl Sync for ControlStopSign","synthetic":true,"types":[]},{"text":"impl Sync for RoadWithStopSign","synthetic":true,"types":[]},{"text":"impl Sync for ControlTrafficSignal","synthetic":true,"types":[]},{"text":"impl Sync for Stage","synthetic":true,"types":[]},{"text":"impl Sync for CompressedMovementID","synthetic":true,"types":[]},{"text":"impl Sync for Movement","synthetic":true,"types":[]},{"text":"impl Sync for MovementID","synthetic":true,"types":[]},{"text":"impl Sync for Turn","synthetic":true,"types":[]},{"text":"impl Sync for TurnID","synthetic":true,"types":[]},{"text":"impl Sync for AccessRestrictions","synthetic":true,"types":[]},{"text":"impl Sync for Zone","synthetic":true,"types":[]},{"text":"impl Sync for IntersectionCluster","synthetic":true,"types":[]},{"text":"impl Sync for UberTurn","synthetic":true,"types":[]},{"text":"impl Sync for UberTurnGroup","synthetic":true,"types":[]},{"text":"impl Sync for Path","synthetic":true,"types":[]},{"text":"impl Sync for PathRequest","synthetic":true,"types":[]},{"text":"impl Sync for Position","synthetic":true,"types":[]},{"text":"impl Sync for Map","synthetic":true,"types":[]},{"text":"impl Sync for EditCmd","synthetic":true,"types":[]},{"text":"impl Sync for EditIntersection","synthetic":true,"types":[]},{"text":"impl Sync for DrivingSide","synthetic":true,"types":[]},{"text":"impl Sync for AreaType","synthetic":true,"types":[]},{"text":"impl Sync for BuildingType","synthetic":true,"types":[]},{"text":"impl Sync for OffstreetParking","synthetic":true,"types":[]},{"text":"impl Sync for IntersectionType","synthetic":true,"types":[]},{"text":"impl Sync for LaneType","synthetic":true,"types":[]},{"text":"impl Sync for Direction","synthetic":true,"types":[]},{"text":"impl Sync for PhaseType","synthetic":true,"types":[]},{"text":"impl Sync for TurnPriority","synthetic":true,"types":[]},{"text":"impl Sync for TurnType","synthetic":true,"types":[]},{"text":"impl Sync for PathConstraints","synthetic":true,"types":[]},{"text":"impl Sync for PathStep","synthetic":true,"types":[]},{"text":"impl Sync for Traversable","synthetic":true,"types":[]},{"text":"impl Sync for OriginalLane","synthetic":true,"types":[]},{"text":"impl Sync for ChangeLaneType","synthetic":true,"types":[]},{"text":"impl Sync for ReverseLane","synthetic":true,"types":[]},{"text":"impl Sync for ChangeSpeedLimit","synthetic":true,"types":[]},{"text":"impl Sync for ChangeAccessRestrictions","synthetic":true,"types":[]},{"text":"impl Sync for PermanentEditIntersection","synthetic":true,"types":[]},{"text":"impl Sync for PermanentEditCmd","synthetic":true,"types":[]},{"text":"impl Sync for InitialMap","synthetic":true,"types":[]},{"text":"impl Sync for Road","synthetic":true,"types":[]},{"text":"impl Sync for Intersection","synthetic":true,"types":[]},{"text":"impl Sync for Piece","synthetic":true,"types":[]},{"text":"impl Sync for LaneSpec","synthetic":true,"types":[]},{"text":"impl Sync for Partition","synthetic":true,"types":[]},{"text":"impl Sync for Matcher","synthetic":true,"types":[]},{"text":"impl Sync for NodeID","synthetic":true,"types":[]},{"text":"impl Sync for WayID","synthetic":true,"types":[]},{"text":"impl Sync for RelationID","synthetic":true,"types":[]},{"text":"impl Sync for RoadRank","synthetic":true,"types":[]},{"text":"impl Sync for OsmID","synthetic":true,"types":[]},{"text":"impl Sync for Pathfinder","synthetic":true,"types":[]},{"text":"impl Sync for ContractionHierarchyPathfinder","synthetic":true,"types":[]},{"text":"impl Sync for VehiclePathfinder","synthetic":true,"types":[]},{"text":"impl Sync for Node","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Sync for NodeMap&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Sync for SidewalkPathfinder","synthetic":true,"types":[]},{"text":"impl Sync for WalkingNode","synthetic":true,"types":[]},{"text":"impl Sync for RawMap","synthetic":true,"types":[]},{"text":"impl Sync for OriginalRoad","synthetic":true,"types":[]},{"text":"impl Sync for RawRoad","synthetic":true,"types":[]},{"text":"impl Sync for RawIntersection","synthetic":true,"types":[]},{"text":"impl Sync for RawBuilding","synthetic":true,"types":[]},{"text":"impl Sync for RawArea","synthetic":true,"types":[]},{"text":"impl Sync for RawParkingLot","synthetic":true,"types":[]},{"text":"impl Sync for TurnRestriction","synthetic":true,"types":[]},{"text":"impl Sync for RawBusRoute","synthetic":true,"types":[]},{"text":"impl Sync for RawBusStop","synthetic":true,"types":[]},{"text":"impl Sync for RestrictionType","synthetic":true,"types":[]}];
implementors["sim"] = [{"text":"impl Sync for Analytics","synthetic":true,"types":[]},{"text":"impl Sync for TripPhase","synthetic":true,"types":[]},{"text":"impl Sync for BorderSpawnOverTime","synthetic":true,"types":[]},{"text":"impl Sync for ExternalPerson","synthetic":true,"types":[]},{"text":"impl Sync for ExternalTrip","synthetic":true,"types":[]},{"text":"impl Sync for IndividTrip","synthetic":true,"types":[]},{"text":"impl Sync for OffMapLocation","synthetic":true,"types":[]},{"text":"impl Sync for PersonSpec","synthetic":true,"types":[]},{"text":"impl Sync for Scenario","synthetic":true,"types":[]},{"text":"impl Sync for ScenarioGenerator","synthetic":true,"types":[]},{"text":"impl Sync for SimFlags","synthetic":true,"types":[]},{"text":"impl Sync for SpawnOverTime","synthetic":true,"types":[]},{"text":"impl Sync for TripSpawner","synthetic":true,"types":[]},{"text":"impl Sync for AgentProperties","synthetic":true,"types":[]},{"text":"impl Sync for Sim","synthetic":true,"types":[]},{"text":"impl Sync for SimOptions","synthetic":true,"types":[]},{"text":"impl Sync for Person","synthetic":true,"types":[]},{"text":"impl Sync for TripInfo","synthetic":true,"types":[]},{"text":"impl Sync for DontDrawAgents","synthetic":true,"types":[]},{"text":"impl Sync for DrawCarInput","synthetic":true,"types":[]},{"text":"impl Sync for DrawPedCrowdInput","synthetic":true,"types":[]},{"text":"impl Sync for DrawPedestrianInput","synthetic":true,"types":[]},{"text":"impl Sync for UnzoomedAgent","synthetic":true,"types":[]},{"text":"impl Sync for CarID","synthetic":true,"types":[]},{"text":"impl Sync for PedestrianID","synthetic":true,"types":[]},{"text":"impl Sync for TripID","synthetic":true,"types":[]},{"text":"impl Sync for PersonID","synthetic":true,"types":[]},{"text":"impl Sync for OrigPersonID","synthetic":true,"types":[]},{"text":"impl Sync for Vehicle","synthetic":true,"types":[]},{"text":"impl Sync for VehicleSpec","synthetic":true,"types":[]},{"text":"impl Sync for ParkedCar","synthetic":true,"types":[]},{"text":"impl Sync for SidewalkSpot","synthetic":true,"types":[]},{"text":"impl Sync for TimeInterval","synthetic":true,"types":[]},{"text":"impl Sync for DistanceInterval","synthetic":true,"types":[]},{"text":"impl Sync for CreatePedestrian","synthetic":true,"types":[]},{"text":"impl Sync for CreateCar","synthetic":true,"types":[]},{"text":"impl Sync for AlertLocation","synthetic":true,"types":[]},{"text":"impl Sync for TripPhaseType","synthetic":true,"types":[]},{"text":"impl Sync for ExternalTripEndpoint","synthetic":true,"types":[]},{"text":"impl Sync for OriginDestination","synthetic":true,"types":[]},{"text":"impl Sync for ScenarioModifier","synthetic":true,"types":[]},{"text":"impl Sync for SpawnTrip","synthetic":true,"types":[]},{"text":"impl Sync for TripPurpose","synthetic":true,"types":[]},{"text":"impl Sync for TripSpec","synthetic":true,"types":[]},{"text":"impl Sync for AlertHandler","synthetic":true,"types":[]},{"text":"impl Sync for PersonState","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Sync for TripResult&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Sync for TripEndpoint","synthetic":true,"types":[]},{"text":"impl Sync for TripMode","synthetic":true,"types":[]},{"text":"impl Sync for CarStatus","synthetic":true,"types":[]},{"text":"impl Sync for PedCrowdLocation","synthetic":true,"types":[]},{"text":"impl Sync for AgentID","synthetic":true,"types":[]},{"text":"impl Sync for AgentType","synthetic":true,"types":[]},{"text":"impl Sync for VehicleType","synthetic":true,"types":[]},{"text":"impl Sync for ParkingSpot","synthetic":true,"types":[]},{"text":"impl Sync for DrivingGoal","synthetic":true,"types":[]},{"text":"impl Sync for SidewalkPOI","synthetic":true,"types":[]},{"text":"impl&lt;X&gt; Sync for TimeSeriesCount&lt;X&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;X: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Sync for Window","synthetic":true,"types":[]},{"text":"impl Sync for CapSimState","synthetic":true,"types":[]},{"text":"impl Sync for Zone","synthetic":true,"types":[]},{"text":"impl Sync for Event","synthetic":true,"types":[]},{"text":"impl Sync for Car","synthetic":true,"types":[]},{"text":"impl Sync for CarState","synthetic":true,"types":[]},{"text":"impl Sync for DrivingSimState","synthetic":true,"types":[]},{"text":"impl Sync for IntersectionSimState","synthetic":true,"types":[]},{"text":"impl Sync for State","synthetic":true,"types":[]},{"text":"impl Sync for SignalState","synthetic":true,"types":[]},{"text":"impl Sync for Request","synthetic":true,"types":[]},{"text":"impl Sync for NormalParkingSimState","synthetic":true,"types":[]},{"text":"impl Sync for ParkingLane","synthetic":true,"types":[]},{"text":"impl Sync for InfiniteParkingSimState","synthetic":true,"types":[]},{"text":"impl Sync for ParkingSimState","synthetic":true,"types":[]},{"text":"impl Sync for Queue","synthetic":true,"types":[]},{"text":"impl Sync for WalkingSimState","synthetic":true,"types":[]},{"text":"impl Sync for Pedestrian","synthetic":true,"types":[]},{"text":"impl Sync for PedState","synthetic":true,"types":[]},{"text":"impl Sync for AnyTime","synthetic":true,"types":[]},{"text":"impl Sync for Event","synthetic":true,"types":[]},{"text":"impl Sync for StateEvent","synthetic":true,"types":[]},{"text":"impl Sync for State","synthetic":true,"types":[]},{"text":"impl Sync for PandemicModel","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Sync for SharedSpace&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Sync for Cmd","synthetic":true,"types":[]},{"text":"impl Sync for Router","synthetic":true,"types":[]},{"text":"impl Sync for ActionAtEnd","synthetic":true,"types":[]},{"text":"impl Sync for Goal","synthetic":true,"types":[]},{"text":"impl Sync for Item","synthetic":true,"types":[]},{"text":"impl Sync for Scheduler","synthetic":true,"types":[]},{"text":"impl Sync for Command","synthetic":true,"types":[]},{"text":"impl Sync for CommandType","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Sync for Ctx&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl Sync for Stop","synthetic":true,"types":[]},{"text":"impl Sync for Route","synthetic":true,"types":[]},{"text":"impl Sync for Bus","synthetic":true,"types":[]},{"text":"impl Sync for TransitSimState","synthetic":true,"types":[]},{"text":"impl Sync for BusState","synthetic":true,"types":[]},{"text":"impl Sync for TripManager","synthetic":true,"types":[]},{"text":"impl Sync for Trip","synthetic":true,"types":[]},{"text":"impl Sync for TripLeg","synthetic":true,"types":[]}];
implementors["updater"] = [{"text":"impl Sync for Cities","synthetic":true,"types":[]}];
implementors["widgetry"] = [{"text":"impl !Sync for Drawable","synthetic":true,"types":[]},{"text":"impl !Sync for Canvas","synthetic":true,"types":[]},{"text":"impl Sync for Color","synthetic":true,"types":[]},{"text":"impl Sync for LinearGradient","synthetic":true,"types":[]},{"text":"impl Sync for Texture","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; !Sync for GfxCtx&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl !Sync for Prerender","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; !Sync for EventCtx&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl Sync for GeomBatch","synthetic":true,"types":[]},{"text":"impl Sync for UserInput","synthetic":true,"types":[]},{"text":"impl Sync for Settings","synthetic":true,"types":[]},{"text":"impl Sync for ScreenDims","synthetic":true,"types":[]},{"text":"impl Sync for ScreenPt","synthetic":true,"types":[]},{"text":"impl Sync for ScreenRectangle","synthetic":true,"types":[]},{"text":"impl Sync for Style","synthetic":true,"types":[]},{"text":"impl Sync for Text","synthetic":true,"types":[]},{"text":"impl Sync for TextSpan","synthetic":true,"types":[]},{"text":"impl Sync for Warper","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Sync for Autocomplete&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Sync for Btn","synthetic":true,"types":[]},{"text":"impl !Sync for MultiButton","synthetic":true,"types":[]},{"text":"impl !Sync for Checkbox","synthetic":true,"types":[]},{"text":"impl !Sync for CompareTimes","synthetic":true,"types":[]},{"text":"impl !Sync for FanChart","synthetic":true,"types":[]},{"text":"impl Sync for Filler","synthetic":true,"types":[]},{"text":"impl !Sync for DrawWithTooltips","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; !Sync for LinePlot&lt;T&gt;","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Sync for PlotOptions&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Sync for Series&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Sync for Menu&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; !Sync for PersistentSplit&lt;T&gt;","synthetic":true,"types":[]},{"text":"impl !Sync for ScatterPlot","synthetic":true,"types":[]},{"text":"impl !Sync for AreaSlider","synthetic":true,"types":[]},{"text":"impl !Sync for Slider","synthetic":true,"types":[]},{"text":"impl !Sync for Spinner","synthetic":true,"types":[]},{"text":"impl Sync for EdgeInsets","synthetic":true,"types":[]},{"text":"impl !Sync for Panel","synthetic":true,"types":[]},{"text":"impl !Sync for Widget","synthetic":true,"types":[]},{"text":"impl Sync for WidgetOutput","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Sync for Choice&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Sync for HorizontalAlignment","synthetic":true,"types":[]},{"text":"impl Sync for VerticalAlignment","synthetic":true,"types":[]},{"text":"impl Sync for Fill","synthetic":true,"types":[]},{"text":"impl Sync for Event","synthetic":true,"types":[]},{"text":"impl Sync for Key","synthetic":true,"types":[]},{"text":"impl Sync for MultiKey","synthetic":true,"types":[]},{"text":"impl Sync for UpdateType","synthetic":true,"types":[]},{"text":"impl Sync for RewriteColor","synthetic":true,"types":[]},{"text":"impl Sync for Outcome","synthetic":true,"types":[]},{"text":"impl !Sync for Assets","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Sync for GfxCtxInnards&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl Sync for VertexArray","synthetic":true,"types":[]},{"text":"impl Sync for Buffer","synthetic":true,"types":[]},{"text":"impl !Sync for PrerenderInnards","synthetic":true,"types":[]},{"text":"impl !Sync for WindowAdapter","synthetic":true,"types":[]},{"text":"impl Sync for CameraState","synthetic":true,"types":[]},{"text":"impl Sync for Uniforms","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; !Sync for LoadingScreen&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;G&gt; !Sync for State&lt;G&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Sync for PathConvIter&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl Sync for Font","synthetic":true,"types":[]},{"text":"impl Sync for LayoutStyle","synthetic":true,"types":[]},{"text":"impl !Sync for Button","synthetic":true,"types":[]},{"text":"impl Sync for BtnBuilder","synthetic":true,"types":[]},{"text":"impl Sync for Nothing","synthetic":true,"types":[]},{"text":"impl !Sync for Container","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; !Sync for Dropdown&lt;T&gt;","synthetic":true,"types":[]},{"text":"impl !Sync for JustDraw","synthetic":true,"types":[]},{"text":"impl Sync for DeferDraw","synthetic":true,"types":[]},{"text":"impl !Sync for PanelBuilder","synthetic":true,"types":[]},{"text":"impl Sync for Dims","synthetic":true,"types":[]},{"text":"impl Sync for TextBox","synthetic":true,"types":[]}];
implementors["widgetry_demo"] = [{"text":"impl !Sync for App","synthetic":true,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()