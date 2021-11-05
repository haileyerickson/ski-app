<template>
    <div>
        <b-list-group-item href="#" class="d-flex justify-content-between">
            <div>
                <b-icon v-if="green" variant="success" icon="circle-fill" class="pr-4">{{green}}</b-icon>
                <b-icon v-if="blue" variant="primary" icon="square-fill" class="pr-4">{{blue}}</b-icon>
                <b-icon v-if="black" variant="dark" icon="diamond-fill" class="pr-4">{{black}}</b-icon>

                <span v-if="doubleBlack">
                    <b-icon variant="dark" icon="diamond-fill" class="pr-0">{{doubleBlack}}</b-icon>
                    <b-icon variant="dark" icon="diamond-fill" class="pr-4">{{doubleBlack}}</b-icon>
                </span>


                <!-- Alpine Directions -->
                    <b-link v-if="alpine" v-b-toggle.alpine variant="primary">{{ item }}</b-link>
                        <b-collapse v-if="alpine" id="alpine" class="mt-2">
                            <p>Directions: {{ alpineDirections }}</p>
                        </b-collapse>

                <!-- Showcase Directions -->
                    <b-link v-if="showcase" v-b-toggle.showcase variant="primary">{{ item }}</b-link>
                        <b-collapse v-if="showcase" id="showcase" class="mt-2">
                            <p>Directions: {{ showcaseDirections }}</p>
                        </b-collapse>

                <!-- Shaker Ridge Directions -->
                    <b-link v-if="shakerRidge" v-b-toggle.shakerRidge variant="primary">{{ item }}</b-link>
                        <b-collapse v-if="shakerRidge" id="shakerRidge" class="mt-2">
                            <p>Directions: {{ shakerRidgeDirections }}</p>
                        </b-collapse>

                <!-- Cascade Directions -->
                    <b-link v-if="cascade" v-b-toggle.cascade variant="primary">{{ item }}</b-link>
                        <b-collapse v-if="cascade" id="cascade" class="mt-2">
                            <p>Directions: {{ cascadeDirections }}</p>
                        </b-collapse>

                <!-- Mambo Meadows Directions -->
                    <b-link v-if="mamboMeadows" v-b-toggle.mamboMeadows variant="primary">{{ item }}</b-link>
                        <b-collapse v-if="mamboMeadows" id="mamboMeadows" class="mt-2">
                            <p>Directions: {{ mamboMeadowsDirections }}</p>
                        </b-collapse>

                <!-- Sunset Directions -->
                    <b-link v-if="sunset" v-b-toggle.sunset variant="primary">{{ item }}</b-link>
                        <b-collapse v-if="sunset" id="sunset" class="mt-2">
                            <p>Directions: {{ sunsetDirections }}</p>
                        </b-collapse>

                <!-- North Slope Directions -->
                    <b-link v-if="northSlope" v-b-toggle.northSlope variant="primary">{{ item }}</b-link>
                        <b-collapse v-if="northSlope" id="northSlope" class="mt-2">
                            <p>Directions: {{ northSlopeDirections }}</p>
                        </b-collapse>

                <!-- Claim Jumper Directions -->
                    <b-link v-if="claimJumper" v-b-toggle.claimJumper variant="primary">{{ item }}</b-link>
                        <b-collapse v-if="claimJumper" id="claimJumper" class="mt-2">
                            <p>Directions: {{ claimJumperDirections }}</p>
                        </b-collapse>

                <!-- Lando's Mojo Directions -->
                    <b-link v-if="landosMojo" v-b-toggle.landosMojo variant="primary">{{ item }}</b-link>
                        <b-collapse v-if="landosMojo" id="landosMojo" class="mt-2">
                            <p>Directions: {{ landosMojoDirections }}</p>
                        </b-collapse>

                <!-- Widow Maker Directions -->
                    <b-link v-if="widowMaker" v-b-toggle.widowMaker variant="primary">{{ item }}</b-link>
                        <b-collapse v-if="widowMaker" id="widowMaker" class="mt-2">
                            <p>Directions: {{ widowMakerDirections }}</p>
                        </b-collapse>

                <!-- Upper Ridge Directions -->
                    <b-link v-if="upperRidge" v-b-toggle.upperRidge variant="primary">{{ item }}</b-link>
                        <b-collapse v-if="upperRidge" id="upperRidge" class="mt-2">
                            <p>Directions: {{ upperRidgeDirections }}</p>
                        </b-collapse>

                <!-- Lower Ridge Directions -->
                    <b-link v-if="lowerRidge" v-b-toggle.lowerRidge variant="primary">{{ item }}</b-link>
                        <b-collapse v-if="lowerRidge" id="lowerRidge" class="mt-2">
                            <p>Directions: {{ lowerRidgeDirections }}</p>
                        </b-collapse>

                <!-- Sourdoug Directions -->
                    <b-link v-if="sourdough" v-b-toggle.sourdough variant="primary">{{ item }}</b-link>
                        <b-collapse v-if="sourdough" id="sourdough" class="mt-2">
                            <p>Directions: {{ sourdoughDirections }}</p>
                        </b-collapse>

                <!-- Bowl Directions -->
                    <b-link v-if="bowl" v-b-toggle.bowl variant="primary">{{ item }}</b-link>
                        <b-collapse v-if="bowl" id="bowl" class="mt-2">
                            <p>Directions: {{ bowlDirections }}</p>
                        </b-collapse>

                <!-- Stewart's Bowl Directions -->
                    <b-link v-if="stewartsBowl" v-b-toggle.stewartsBowl variant="primary">{{ item }}</b-link>
                        <b-collapse v-if="stewartsBowl" id="stewartsBowl" class="mt-2">
                            <p>Directions: {{ stewartsBowlDirections }}</p>
                        </b-collapse>

                <!-- Coach's Corner Directions -->
                    <b-link v-if="coachsCorner" v-b-toggle.coachsCorner variant="primary">{{ item }}</b-link>
                        <b-collapse v-if="coachsCorner" id="coachsCorner" class="mt-2">
                            <p>Directions: {{ coachsCornerDirections }}</p>
                        </b-collapse>

                <!-- Bogus Creek Trail Directions -->
                    <b-link v-if="bogusCreekTrail" v-b-toggle.bogusCreekTrail variant="primary">{{ item }}</b-link>
                        <b-collapse v-if="bogusCreekTrail" id="bogusCreekTrail" class="mt-2">
                            <p>Directions: {{ bogusCreekTrailDirections }}</p>
                        </b-collapse>

                <!-- Nugget Cat Track Directions -->
                    <b-link v-if="nuggetCatTrack" v-b-toggle.nuggetCatTrack variant="primary">{{ item }}</b-link>
                        <b-collapse v-if="nuggetCatTrack" id="nuggetCatTrack" class="mt-2">
                            <p>Directions: {{ nuggetCatTrackDirections }}</p>
                        </b-collapse>

                <!-- Nugget Bowls Directions -->
                    <b-link v-if="nuggetBowls" v-b-toggle.nuggetBowls variant="primary">{{ item }}</b-link>
                        <b-collapse v-if="nuggetBowls" id="nuggetBowls" class="mt-2">
                            <p>Directions: {{ nuggetBowlsDirections }}</p>
                        </b-collapse>

                <!-- Cabin Traverse Directions -->
                    <b-link v-if="cabinTraverse" v-b-toggle.cabinTraverse variant="primary">{{ item }}</b-link>
                        <b-collapse v-if="cabinTraverse" id="cabinTraverse" class="mt-2">
                            <p>Directions: {{ cabinTraverseDirections }}</p>
                        </b-collapse>

                <!-- Corn Patch Directions -->
                    <b-link v-if="cornPatch" v-b-toggle.cornPatch variant="primary">{{ item }}</b-link>
                        <b-collapse v-if="cornPatch" id="cornPatch" class="mt-2">
                            <p>Directions: {{ cornPatchDirections }}</p>
                        </b-collapse>

                <!-- Shindig Directions -->
                    <b-link v-if="shindig" v-b-toggle.shindig variant="primary">{{ item }}</b-link>
                        <b-collapse v-if="shindig" id="shindig" class="mt-2">
                            <p>Directions: {{ shindigDirections }}</p>
                        </b-collapse>

                <!-- Tiger Directions -->
                    <b-link v-if="tiger" v-b-toggle.tiger variant="primary">{{ item }}</b-link>
                        <b-collapse v-if="tiger" id="tiger" class="mt-2">
                            <p>Directions: {{ tigerDirections }}</p>
                        </b-collapse>

                <!-- Liberty Directions -->
                    <b-link v-if="liberty" v-b-toggle.liberty variant="primary">{{ item }}</b-link>
                        <b-collapse v-if="liberty" id="liberty" class="mt-2">
                            <p>Directions: {{ libertyDirections }}</p>
                        </b-collapse>

                <!-- Last Chance Directions -->
                    <b-link v-if="lastChance" v-b-toggle.lastChance variant="primary">{{ item }}</b-link>
                        <b-collapse v-if="lastChance" id="lastChance" class="mt-2">
                            <p>Directions: {{ lastChanceDirections }}</p>
                        </b-collapse>

                <!-- Power Line Directions -->
                    <b-link v-if="powerLine" v-b-toggle.powerLine variant="primary">{{ item }}</b-link>
                        <b-collapse v-if="powerLine" id="powerLine" class="mt-2">
                            <p>Directions: {{ powerLineDirections }}</p>
                        </b-collapse>

                <!-- Omar's Inspiration Directions -->
                    <b-link v-if="omarsInspiration" v-b-toggle.omarsInspiration variant="primary">{{ item }}</b-link>
                        <b-collapse v-if="omarsInspiration" id="omarsInspiration" class="mt-2">
                            <p>Directions: {{ omarsInspirationDirections }}</p>
                        </b-collapse>

                <!-- Greenie's Run Directions -->
                    <b-link v-if="greeniesRun" v-b-toggle.greeniesRun variant="primary">{{ item }}</b-link>
                        <b-collapse v-if="greeniesRun" id="greeniesRun" class="mt-2">
                            <p>Directions: {{ greeniesRunDirections }}</p>
                        </b-collapse>

                <!-- Sunshine Directions -->
                    <b-link v-if="sunshine" v-b-toggle.sunshine variant="primary">{{ item }}</b-link>
                        <b-collapse v-if="sunshine" id="sunshine" class="mt-2">
                            <p>Directions: {{ sunshineDirections }}</p>
                        </b-collapse>

                <!-- Sunshine Cat Track Directions -->
                    <b-link v-if="sunshineCatTrack" v-b-toggle.sunshineCatTrack variant="primary">{{ item }}</b-link>
                        <b-collapse v-if="sunshineCatTrack" id="sunshineCatTrack" class="mt-2">
                            <p>Directions: {{ sunshineCatTrackDirections }}</p>
                        </b-collapse>

                <!-- Pioneer Trail Directions -->
                    <b-link v-if="pioneerTrail" v-b-toggle.pioneerTrail variant="primary">{{ item }}</b-link>
                        <b-collapse v-if="pioneerTrail" id="pioneerTrail" class="mt-2">
                            <p>Directions: {{ pioneerTrailDirections }}</p>
                        </b-collapse>

                <!-- Connector Directions -->
                    <b-link v-if="connector" v-b-toggle.connector variant="primary">{{ item }}</b-link>
                        <b-collapse v-if="connector" id="connector" class="mt-2">
                            <p>Directions: {{ connectorDirections }}</p>
                        </b-collapse>

                <!-- Morning Star Directions -->
                    <b-link v-if="morningStar" v-b-toggle.morningStar variant="primary">{{ item }}</b-link>
                        <b-collapse v-if="morningStar" id="morningStar" class="mt-2">
                            <p>Directions: {{ morningStarDirections }}</p>
                        </b-collapse>

                <!-- Hogsback Directions -->
                    <b-link v-if="hogsback" v-b-toggle.hogsback variant="primary">{{ item }}</b-link>
                        <b-collapse v-if="hogsback" id="hogsback" class="mt-2">
                            <p>Directions: {{ hogsbackDirections }}</p>
                        </b-collapse>

                <!-- Lulu Directions -->
                    <b-link v-if="lulu" v-b-toggle.lulu variant="primary">{{ item }}</b-link>
                        <b-collapse v-if="lulu" id="lulu" class="mt-2">
                            <p>Directions: {{ luluDirections }}</p>
                        </b-collapse>

                <!-- Silverqueen Directions -->
                    <b-link v-if="silverQueen" v-b-toggle.silverQueen variant="primary">{{ item }}</b-link>
                        <b-collapse v-if="silverQueen" id="silverQueen" class="mt-2">
                            <p>Directions: {{ silverQueenDirections }}</p>
                        </b-collapse>

                <!-- Upper Nugget Directions -->
                    <b-link v-if="upperNugget" v-b-toggle.upperNugget variant="primary">{{ item }}</b-link>
                        <b-collapse v-if="upperNugget" id="upperNugget" class="mt-2">
                            <p>Directions: {{ upperNuggetDirections }}</p>
                        </b-collapse>

                <!-- Easy Way Down Directions -->
                    <b-link v-if="easyWayDown" v-b-toggle.easyWayDown variant="primary">{{ item }}</b-link>
                        <b-collapse v-if="easyWayDown" id="easyWayDown" class="mt-2">
                            <p>Directions: {{ easyWayDownDirections }}</p>
                        </b-collapse>

                <!-- Second Chance Directions -->
                    <b-link v-if="secondChance" v-b-toggle.secondChance variant="primary">{{ item }}</b-link>
                        <b-collapse v-if="secondChance" id="secondChance" class="mt-2">
                            <p>Directions: {{ secondChanceDirections }}</p>
                        </b-collapse>

                <!-- Lower Nugget Directions -->
                    <b-link v-if="lowerNugget" v-b-toggle.lowerNugget variant="primary">{{ item }}</b-link>
                        <b-collapse v-if="lowerNugget" id="lowerNugget" class="mt-2">
                            <p>Directions: {{ lowerNuggetDirections }}</p>
                        </b-collapse>

                <!-- Mary's Ridge Directions -->
                    <b-link v-if="marysRidge" v-b-toggle.marysRidge variant="primary">{{ item }}</b-link>
                        <b-collapse v-if="marysRidge" id="marysRidge" class="mt-2">
                            <p>Directions: {{ marysRidgeDirections }}</p>
                        </b-collapse>

                <!-- Wildcat Directions -->
                    <b-link v-if="wildcat" v-b-toggle.wildcat variant="primary">{{ item }}</b-link>
                        <b-collapse v-if="wildcat" id="wildcat" class="mt-2">
                            <p>Directions: {{ wildcatDirections }}</p>
                        </b-collapse>

                <!-- Lightning Directions -->
                    <b-link v-if="lightning" v-b-toggle.lightning variant="primary">{{ item }}</b-link>
                        <b-collapse v-if="lightning" id="lightning" class="mt-2">
                            <p>Directions: {{ lightningDirections }}</p>
                        </b-collapse>

                <!-- Lightning Directions -->
                    <b-link v-if="pineCreekBowl" v-b-toggle.pineCreekBowl variant="primary">{{ item }}</b-link>
                        <b-collapse v-if="pineCreekBowl" id="pineCreekBowl" class="mt-2">
                            <p>Directions: {{ pineCreekBowlDirections }}</p>
                        </b-collapse>

                <!-- Upper Paradise Directions -->
                    <b-link v-if="upperParadise" v-b-toggle.upperParadise variant="primary">{{ item }}</b-link>
                        <b-collapse v-if="upperParadise" id="upperParadise" class="mt-2">
                            <p>Directions: {{ upperParadiseDirections }}</p>
                        </b-collapse>

                <!-- Lucky Friday Directions -->
                    <b-link v-if="luckyFriday" v-b-toggle.luckyFriday variant="primary">{{ item }}</b-link>
                        <b-collapse v-if="luckyFriday" id="luckyFriday" class="mt-2">
                            <p>Directions: {{ luckyFridayDirections }}</p>
                        </b-collapse>

                <!-- Paradise Directions -->
                    <b-link v-if="paradise" v-b-toggle.paradise variant="primary">{{ item }}</b-link>
                        <b-collapse v-if="paradise" id="paradise" class="mt-2">
                            <p>Directions: {{ paradiseDirections }}</p>
                        </b-collapse>

                <!-- Lower Paradise Directions -->
                    <b-link v-if="lowerParadise" v-b-toggle.lowerParadise variant="primary">{{ item }}</b-link>
                        <b-collapse v-if="lowerParadise" id="lowerParadise" class="mt-2">
                            <p>Directions: {{ lowerParadiseDirections }}</p>
                        </b-collapse>

                <!-- Good Enough Directions -->
                    <b-link v-if="goodEnough" v-b-toggle.goodEnough variant="primary">{{ item }}</b-link>
                        <b-collapse v-if="goodEnough" id="goodEnough" class="mt-2">
                            <p>Directions: {{ goodEnoughDirections }}</p>
                        </b-collapse>

                <!-- Majestic Directions -->
                    <b-link v-if="majestic" v-b-toggle.majestic variant="primary">{{ item }}</b-link>
                        <b-collapse v-if="majestic" id="majestic" class="mt-2">
                            <p>Directions: {{ majesticDirections }}</p>
                        </b-collapse>

                <!-- The Triangle Directions -->
                    <b-link v-if="theTriangle" v-b-toggle.theTriangle variant="primary">{{ item }}</b-link>
                        <b-collapse v-if="theTriangle" id="theTriangle" class="mt-2">
                            <p>Directions: {{ theTriangleDirections }}</p>
                        </b-collapse>

                <!-- Mid Paradise Cut Off Directions -->
                    <b-link v-if="midParadiseCutOff" v-b-toggle.midParadiseCutOff variant="primary">{{ item }}</b-link>
                        <b-collapse v-if="midParadiseCutOff" id="midParadiseCutOff" class="mt-2">
                            <p>Directions: {{ midParadiseCutOffDirections }}</p>
                        </b-collapse>

                <!-- Paradise Cat Track Directions -->
                    <b-link v-if="paradiseCatTrack" v-b-toggle.paradiseCatTrack variant="primary">{{ item }}</b-link>
                        <b-collapse v-if="paradiseCatTrack" id="paradiseCatTrack" class="mt-2">
                            <p>Directions: {{ paradiseCatTrackDirections }}</p>
                        </b-collapse>

                <!-- Bonanza Directions -->
                    <b-link v-if="bonanza" v-b-toggle.bonanza variant="primary">{{ item }}</b-link>
                        <b-collapse v-if="bonanza" id="bonanza" class="mt-2">
                            <p>Directions: {{ bonanzaDirections }}</p>
                        </b-collapse>

                <!-- Night Hawk Cut Off Directions -->
                    <b-link v-if="nightHawkCutOff" v-b-toggle.nightHawkCutOff variant="primary">{{ item }}</b-link>
                        <b-collapse v-if="nightHawkCutOff" id="nightHawkCutOff" class="mt-2">
                            <p>Directions: {{ nightHawkCutOffDirections }}</p>
                        </b-collapse>

                <!-- Lower Bonanza Directions -->
                    <b-link v-if="lowerBonanza" v-b-toggle.lowerBonanza variant="primary">{{ item }}</b-link>
                        <b-collapse v-if="lowerBonanza" id="lowerBonanza" class="mt-2">
                            <p>Directions: {{ lowerBonanzaDirections }}</p>
                        </b-collapse>

                <!-- Grooming Trail Directions -->
                    <b-link v-if="groomingTrail" v-b-toggle.groomingTrail variant="primary">{{ item }}</b-link>
                        <b-collapse v-if="groomingTrail" id="groomingTrail" class="mt-2">
                            <p>Directions: {{ groomingTrailDirections }}</p>
                        </b-collapse>

                <!-- Night Hawk Directions -->
                    <b-link v-if="nightHawk" v-b-toggle.nightHawk variant="primary">{{ item }}</b-link>
                        <b-collapse v-if="nightHawk" id="nightHawk" class="mt-2">
                            <p>Directions: {{ nightHawkDirections }}</p>
                        </b-collapse>

                <!-- Triumph Directions -->
                    <b-link v-if="triumph" v-b-toggle.triumph variant="primary">{{ item }}</b-link>
                        <b-collapse v-if="triumph" id="triumph" class="mt-2">
                            <p>Directions: {{ triumphDirections }}</p>
                        </b-collapse>

                <!-- Matchless Directions -->
                    <b-link v-if="matchless" v-b-toggle.matchless variant="primary">{{ item }}</b-link>
                        <b-collapse v-if="matchless" id="matchless" class="mt-2">
                            <p>Directions: {{ matchlessDirections }}</p>
                        </b-collapse>

                <!-- Comeback Directions -->
                    <b-link v-if="comeback" v-b-toggle.comeback variant="primary">{{ item }}</b-link>
                        <b-collapse v-if="comeback" id="comeback" class="mt-2">
                            <p>Directions: {{ comebackDirections }}</p>
                        </b-collapse>

                <!-- Tempest Directions -->
                    <b-link v-if="tempest" v-b-toggle.tempest variant="primary">{{ item }}</b-link>
                        <b-collapse v-if="tempest" id="tempest" class="mt-2">
                            <p>Directions: {{ tempestDirections }}</p>
                        </b-collapse>

                <!-- Lodge Cat Run Directions -->
                    <b-link v-if="lodgeCatRun" v-b-toggle.lodgeCatRun variant="primary">{{ item }}</b-link>
                        <b-collapse v-if="lodgeCatRun" id="lodgeCatRun" class="mt-2">
                            <p>Directions: {{ lodgeCatRunDirections }}</p>
                        </b-collapse>

                <!-- Superior Directions -->
                    <b-link v-if="superior" v-b-toggle.superior variant="primary">{{ item }}</b-link>
                        <b-collapse v-if="superior" id="superior" class="mt-2">
                            <p>Directions: {{ superiorDirections }}</p>
                        </b-collapse>

                <!-- Sunbeam Directions -->
                    <b-link v-if="sunbeam" v-b-toggle.sunbeam variant="primary">{{ item }}</b-link>
                        <b-collapse v-if="sunbeam" id="sunbeam" class="mt-2">
                            <p>Directions: {{ sunbeamDirections }}</p>
                        </b-collapse>

                <!-- War Eagle Directions -->
                    <b-link v-if="warEagle" v-b-toggle.warEagle variant="primary">{{ item }}</b-link>
                        <b-collapse v-if="warEagle" id="warEagle" class="mt-2">
                            <p>Directions: {{ warEagleDirections }}</p>
                        </b-collapse>

                <!-- War Eagle Cat Track Directions -->
                    <b-link v-if="warEagleCatTrack" v-b-toggle.warEagleCatTrack variant="primary">{{ item }}</b-link>
                        <b-collapse v-if="warEagleCatTrack" id="warEagleCatTrack" class="mt-2">
                            <p>Directions: {{ warEagleCatTrackDirections }}</p>
                        </b-collapse>

                <!-- Smuggler Directions -->
                    <b-link v-if="smuggler" v-b-toggle.smuggler variant="primary">{{ item }}</b-link>
                        <b-collapse v-if="smuggler" id="smuggler" class="mt-2">
                            <p>Directions: {{ smugglerDirections }}</p>
                        </b-collapse>

                <!-- Smuggler Cut Off Directions -->
                    <b-link v-if="smugglerCutOff" v-b-toggle.smugglerCutOff variant="primary">{{ item }}</b-link>
                        <b-collapse v-if="smugglerCutOff" id="smugglerCutOff" class="mt-2">
                            <p>Directions: {{ smugglerCutOffDirections }}</p>
                        </b-collapse>

                <!-- Sleep Connector Directions -->
                    <b-link v-if="sleepConnector" v-b-toggle.sleepConnector variant="primary">{{ item }}</b-link>
                        <b-collapse v-if="sleepConnector" id="sleepConnector" class="mt-2">
                            <p>Directions: {{ sleepConnectorDirections }}</p>
                        </b-collapse>

                <!-- Snoozer Directions -->
                    <b-link v-if="snoozer" v-b-toggle.snoozer variant="primary">{{ item }}</b-link>
                        <b-collapse v-if="snoozer" id="snoozer" class="mt-2">
                            <p>Directions: {{ snoozerDirections }}</p>
                        </b-collapse>

                <!-- Sleepy Hollow Directions -->
                    <b-link v-if="sleepyHollow" v-b-toggle.sleepyHollow variant="primary">{{ item }}</b-link>
                        <b-collapse v-if="sleepyHollow" id="sleepyHollow" class="mt-2">
                            <p>Directions: {{ sleepyHollowDirections }}</p>
                        </b-collapse>

                <!-- Lazy Mary Directions -->
                    <b-link v-if="lazyMary" v-b-toggle.lazyMary variant="primary">{{ item }}</b-link>
                        <b-collapse v-if="lazyMary" id="lazyMary" class="mt-2">
                            <p>Directions: {{ lazyMaryDirections }}</p>
                        </b-collapse>

                <!-- Bear Paw Directions -->
                    <b-link v-if="bearPaw" v-b-toggle.bearPaw variant="primary">{{ item }}</b-link>
                        <b-collapse v-if="bearPaw" id="bearPaw" class="mt-2">
                            <p>Directions: {{ bearPawDirections }}</p>
                        </b-collapse>

                <!-- Nitro Directions -->
                    <b-link v-if="nitro" v-b-toggle.nitro variant="primary">{{ item }}</b-link>
                        <b-collapse v-if="nitro" id="nitro" class="mt-2">
                            <p>Directions: {{ nitroDirections }}</p>
                        </b-collapse>

                <!-- Bitterroot Basin Directions -->
                    <b-link v-if="bitterrootBasin" v-b-toggle.bitterrootBasin variant="primary">{{ item }}</b-link>
                        <b-collapse v-if="bitterrootBasin" id="bitterrootBasin" class="mt-2">
                            <p>Directions: {{ bitterrootBasinDirections }}</p>
                        </b-collapse>

                <!-- B-2 Basin Directions -->
                    <b-link v-if="bTwo" v-b-toggle.bTwo variant="primary">{{ item }}</b-link>
                        <b-collapse v-if="bTwo" id="bTwo" class="mt-2">
                            <p>Directions: {{ bTwoDirections }}</p>
                        </b-collapse>

                <!-- B-3 Basin Directions -->
                    <b-link v-if="bThree" v-b-toggle.bThree variant="primary">{{ item }}</b-link>
                        <b-collapse v-if="bThree" id="bThree" class="mt-2">
                            <p>Directions: {{ bThreeDirections }}</p>
                        </b-collapse>

                <!-- Buttercup Trail Directions -->
                    <b-link v-if="buttercupTrail" v-b-toggle.buttercupTrail variant="primary">{{ item }}</b-link>
                        <b-collapse v-if="buttercupTrail" id="buttercupTrail" class="mt-2">
                            <p>Directions: {{ buttercupTrailDirections }}</p>
                        </b-collapse>
            </div>

            <div>
                <b-badge v-if="badge" variant="light">{{badge}}</b-badge>
            </div>
        </b-list-group-item>
    </div>
</template>

<script>
    export default {
      name: 'RunListItem',
      props: {
          item: String,
          badge: String,
          green: Boolean,
          blue: Boolean,
          black: Boolean,
          doubleBlack: Boolean,
          alpine: Boolean,
          alpineDirections: String,
          showcase: Boolean,
          showcaseDirections: String,
          shakerRidge: Boolean,
          shakerRidgeDirections: String,
          cascade: Boolean,
          cascadeDirections: String,
          mamboMeadows: Boolean,
          mamboMeadowsDirections: String,
          sunset: Boolean,
          sunsetDirections: String,
          northSlope: Boolean,
          northSlopeDirections: String,
          claimJumper: Boolean,
          claimJumperDirections: String,
          landosMojo: Boolean,
          landosMojoDirections: String,
          widowMaker: Boolean,
          widowMakerDirections: String,
          upperRidge: Boolean,
          upperRidgeDirections: String,
          lowerRidge: Boolean,
          lowerRidgeDirections: String,
          sourdough: Boolean,
          sourdoughDirections: String,
          bowl: Boolean,
          bowlDirections: String,
          stewartsBowl: Boolean,
          stewartsBowlDirections: String,
          coachsCorner: Boolean,
          coachsCornerDirections: String,
          bogusCreekTrail: Boolean,
          bogusCreekTrailDirections: String,
          nuggetCatTrack: Boolean,
          nuggetCatTrackDirections: String,
          nuggetBowls: Boolean,
          nuggetBowlsDirections: String,
          cabinTraverse: Boolean,
          cabinTraverseDirections: String,
          cornPatch: Boolean,
          cornPatchDirections: String,
          shindig: Boolean,
          shindigDirections: String,
          tiger: Boolean,
          tigerDirections: String,
          liberty: Boolean,
          libertyDirections: String,
          lastChance: Boolean,
          lastChanceDirections: String,
          powerLine: Boolean,
          powerLineDirections: String,
          omarsInspiration: Boolean,
          omarsInspirationDirections: String,
          greeniesRun: Boolean,
          greeniesRunDirections: String,
          sunshine: Boolean,
          sunshineDirections: String,
          sunshineCatTrack: Boolean,
          sunshineCatTrackDirections: String,
          pioneerTrail: Boolean,
          pioneerTrailDirections: String,
          connector: Boolean,
          connectorDirections: String,
          morningStar: Boolean,
          morningStarDirections: String,
          hogsback: Boolean,
          hogsbackDirections: String,
          lulu: Boolean,
          luluDirections: String,
          silverQueen: Boolean,
          silverQueenDirections: String,
          upperNugget: Boolean,
          upperNuggetDirections: String,
          easyWayDown: Boolean,
          easyWayDownDirections: String,
          secondChance: Boolean,
          secondChanceDirections: String,
          lowerNugget: Boolean,
          lowerNuggetDirections: String,
          marysRidge: Boolean,
          marysRidgeDirections: String,
          wildcat: Boolean,
          wildcatDirections: String,
          lightning: Boolean,
          lightningDirections: String,
          pineCreekBowl: Boolean,
          pineCreekBowlDirections: String,
          upperParadise: Boolean,
          upperParadiseDirections: String,
          luckyFriday: Boolean,
          luckyFridayDirections: String,
          paradise: Boolean,
          paradiseDirections: String,
          lowerParadise: Boolean,
          lowerParadiseDirections: String,
          goodEnough: Boolean,
          goodEnoughDirections: String,
          majestic: Boolean,
          majesticDirections: String,
          theTriangle: Boolean,
          theTriangleDirections: String,
          midParadiseCutOff: Boolean,
          midParadiseCutOffDirections: String,
          paradiseCatTrack: Boolean,
          paradiseCatTrackDirections: String,
          bonanza: Boolean,
          bonanzaDirections: String,
          nightHawkCutOff: Boolean,
          nightHawkCutOffDirections: String,
          lowerBonanza: Boolean,
          lowerBonanzaDirections: String,
          groomingTrail: Boolean,
          groomingTrailDirections: String,
          nightHawk: Boolean,
          nightHawkDirections: String,
          triumph: Boolean,
          triumphDirections: String,
          matchless: Boolean,
          matchlessDirections: String,
          comeback: Boolean,
          comebackDirections: String,
          tempest: Boolean,
          tempestDirections: String,
          lodgeCatRun: Boolean,
          lodgeCatRunDirections: String,
          superior: Boolean,
          superiorDirections: String,
          sunbeam: Boolean,
          sunbeamDirections: String,
          warEagle: Boolean,
          warEagleDirections: String,
          warEagleCatTrack: Boolean,
          warEagleCatTrackDirections: String,
          smuggler: Boolean,
          smugglerDirections: String,
          smugglerCutOff: Boolean,
          smugglerCutOffDirections: String,
          sleepConnector: Boolean,
          sleepConnectorDirections: String,
          snoozer: Boolean,
          snoozerDirections: String,
          sleepyHollow: Boolean,
          sleepyHollowDirections: String,
          lazyMary: Boolean,
          lazyMaryDirections: String,
          bearPaw: Boolean,
          bearPawDirections: String,
          nitro: Boolean,
          nitroDirections: String,
          bitterrootBasin: Boolean,
          bitterrootBasinDirections: String,
          bTwo: Boolean,
          bTwoDirections: String,
          bThree: Boolean,
          bThreeDirections: String,
          buttercupTrail: Boolean,
          buttercupTrailDirections: String,
      },

    }
</script>

<style scoped>

</style>
