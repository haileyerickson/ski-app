<template>
  <div class="body">
    <SectionScrollable>
        <HeaderLogo/>

        <SearchButton/>

        <b-tabs class="mt-3" justified>
            <b-tab title="List View" active>
                <b-list-group flush>
                    <RunListItem item="Alpine" blue alpine alpineDirections="From the Simplot Lodge parking lot, take the Deer Point Express #1 to the top and exit the lift to your left. Traverse slightly down the mountain until you see the sign for Showcase. Continue past Showcase to find the sign for Alpine."/>

                    <RunListItem item="Showcase" badge="groomed" green showcase showcaseDirections="From the Simplot Lodge parking lot, take the Deer Point Express #1 to the top and exit the lift to your left. Traverse slightly down the mountain until you see the sign for Showcase."/>

                    <RunListItem item="Shaker Ridge" badge="groomed" blue shakerRidge shakerRidgeDirections="Shaker Ridge Directions"/>

                    <RunListItem item="Cascade" black cascade cascadeDirections="Cascade Directions"/>

                    <RunListItem item="Mambo Meadows" blue mamboMeadows mamboMeadowsDirections="Mambo Meadows Directions"/>

                    <RunListItem item="Sunset" blue sunset sunsetDirections="Sunset Directions"/>

                    <RunListItem item="North Slope" blue northSlope northSlopeDirections="North Slope Directions"/>

                    <RunListItem item="Claim Jumper" blue claimJumper claimJumperDirections="Claim Jumper Directions"/>

                    <RunListItem item="Lando's Mojo" badge="groomed" black landosMojo landosMojoDirections="Lando's Mojo Directions"/>

                    <RunListItem item="Widow Maker" black widowMaker widowMakerDirections="Widow Maker Directions"/>

                    <RunListItem item="Upper Ridge" badge="groomed" blue upperRidge upperRidgeDirections="Upper Ridge Directions"/>

                    <RunListItem item="Lower Ridge" badge="groomed" blue lowerRidge lowerRidgeDirections="Lower Ridge Directions"/>

                    <RunListItem item="Sourdough" blue sourdough sourdoughDirections="Sourdough Directions"/>

                    <RunListItem item="Bowl" black bowl bowlDirections="Bowl Directions"/>

                    <RunListItem item="Stewart's Bowl" badge="groomed" blue stewartsBowl stewartsBowlDirections="Stewart's Bowl Directions"/>

                    <RunListItem item="Coach's Corner" badge="groomed" green coachsCorner coachsCornerDirections="Coach's Corner Directions"/>

                    <RunListItem item="Bogus Creek Trail" badge="groomed" green bogusCreekTrail bogusCreekTrailDirections="Bogus Creek Trail Directions"/>

                    <RunListItem item="Nugget Cat Track" badge="groomed" blue nuggetCatTrack nuggetCatTrackDirections="Nugget Cat Track Directions"/>

                    <RunListItem item="Nugget Bowls" black nuggetBowls nuggetBowlsDirections="Nugget Bowls Directions"/>

                    <RunListItem item="Cabin Traverse" blue badge="groomed" cabinTraverse cabinTraverseDirections="Cabin Traverse Directions"/>

                    <RunListItem item="Corn Patch" black cornPatch cornPatchDirections="Corn Patch Directions"/>

                    <RunListItem item="Shindig" blue badge="groomed" shindig shindigDirections="Shindig Directions"/>

                    <RunListItem item="Tiger" doubleBlack tiger tigerDirections="Tiger Directions"/>

                    <RunListItem item="Liberty" doubleBlack liberty libertyDirections="Liberty Directions"/>

                    <RunListItem item="Last Chance" doubleBlack lastChance lastChanceDirections="Last Chance Directions"/>

                    <RunListItem item="Power Line" doubleBlack powerLine powerLineDirections="Power Line Directions"/>

                    <RunListItem item="Omar's Inspiration" doubleBlack omarsInspiration omarsInspirationDirections="Omar's Inspiration Directions"/>

                    <RunListItem item="Greenie's Run" doubleBlack greeniesRun greeniesRunDirections="Greenie's Run Directions"/>

                    <RunListItem item="Sunshine" green sunshine sunshineDirections="Sunshine Directions"/>

                    <RunListItem item="Sunshine Cat Track" green sunshineCatTrack sunshineCatTrackDirections="Sunshine Cat Track Directions"/>

                    <RunListItem item="Pioneer Trail" green pioneerTrail pioneerTrailDirections="Pioneer Trail Directions"/>

                    <RunListItem item="Connector" green connector connectorDirections="Connector Directions"/>

                    <RunListItem item="Morning Star" blue morningStar morningStarDirections="Morning Star Directions"/>

                    <RunListItem item="Hogsback" blue hogsback hogsbackDirections="Hogsback Directions"/>

                    <RunListItem item="Lulu" green lulu luluDirections="Lulu Directions"/>

                    <RunListItem item="Silver Queen" green silverQueen silverQueenDirections="Silver Queen Directions"/>

                    <RunListItem item="Upper Nugget" blue upperNugget upperNuggetDirections="Upper Nugget Directions"/>

                    <RunListItem item="Easy Way Down" blue easyWayDown easyWayDownDirections="Easy Way Down Directions"/>

                    <RunListItem item="Second Chance" black secondChance secondChanceDirections="Second Chance Directions"/>

                    <RunListItem item="Lower Nugget" black lowerNugget lowerNuggetDirections="Lower Nugget Directions"/>

                    <RunListItem item="Mary's Ridge" black marysRidge marysRidgeDirections="Mary's Ridge Directions"/>

                    <RunListItem item="Wildcat" black wildcat wildcatDirections="Wildcat Directions"/>

                    <RunListItem item="Lightning" doubleBlack lightning lightningDirections="Lightning Directions"/>

                    <RunListItem item="Pine Creek Bowl" doubleBlack pineCreekBowl pineCreekBowlDirections="Pine Creek Bowl Directions"/>

                    <RunListItem item="Upper Paradise" black upperParadise upperParadiseDirections="Upper Paradise Directions"/>

                    <RunListItem item="Lucky Friday" doubleBlack luckyFriday luckyFridayDirections="Lucky Friday Directions"/>

                    <RunListItem item="Paradise" blue paradise paradiseDirections="Paradise Directions"/>

                    <RunListItem item="Lower Paradise" blue lowerParadise lowerParadiseDirections="Lower Paradise Directions"/>

                    <RunListItem item="Good Enough" blue goodEnough goodEnoughDirections="Good Enough Directions"/>

                    <RunListItem item="Majestic" black majestic majesticDirections="Majestic Directions"/>

                    <RunListItem item="The Triangle" black theTriangle theTriangleDirections="The Triangle Directions"/>

                    <RunListItem item="Mid Paradise Cut Off" blue midParadiseCutOff midParadiseCutOffDirections="Mid Paradise Cut Off Directions"/>

                    <RunListItem item="Paradise Cat Track" blue paradiseCatTrack paradiseCatTrackDirections="Paradise Cat Track Directions"/>

                    <RunListItem item="Bonanza" blue bonanza bonanzaDirections="Bonanza Directions"/>

                    <RunListItem item="Night Hawk Cutt Off" blue nightHawkCutOff nightHawkCutOffDirections="Night Hawk Cut Off Directions"/>

                    <RunListItem item="Lower Bonanza" blue lowerBonanza lowerBonanzaDirections="Lower Bonanza Directions"/>

                    <RunListItem item="Grooming Trail" blue groomingTrail groomingTrailDirections="Grooming Trail Directions"/>

                    <RunListItem item="Night Hawk" black nightHawk nightHawkDirections="Night Hawk Directions"/>

                    <RunListItem item="Triumph" black triumph triumphDirections="Triumph Directions"/>

                    <RunListItem item="Matchless" black matchless matchlessDirections="Matchless Directions"/>

                    <RunListItem item="Comeback" blue comeback comebackDirections="Comeback Directions"/>

                    <RunListItem item="Tempest" doubleBlack tempest tempestDirections="Tempest Directions"/>

                    <RunListItem item="Lodge Cat Run" blue lodgeCatRun lodgeCatRunDirections="Lodge Cat Run Directions"/>

                    <RunListItem item="Superior" black superior superiorDirections="Superior Directions"/>

                    <RunListItem item="Sunbeam" black sunbeam sunbeamDirections="Sunbeam Directions"/>

                    <RunListItem item="War Eagle" black warEagle warEagleDirections="War Eagle Directions"/>

                    <RunListItem item="War Eagle Cat Track" black warEagleCatTrack warEagleCatTrackDirections="War Eagle Cat Track Directions"/>

                    <RunListItem item="Smuggler" blue smuggler smugglerDirections="Smuggler Directions"/>

                    <RunListItem item="Smuggler Cut Off" blue smugglerCutOff smugglerCutOffDirections="Smuggler Cutt Off Directions"/>

                    <RunListItem item="Sleepy Connector" blue sleepConnector sleepConnectorDirections="Sleepy Connector Directions"/>

                    <RunListItem item="Snoozer" blue snoozer snoozerDirections="Snoozer Directions"/>

                    <RunListItem item="Sleepy Hollow" blue sleepyHollow sleepyHollowDirections="Sleepy Hollow Directions"/>

                    <RunListItem item="Lazy Mary" blue lazyMary lazyMaryDirections="Lazy Mary Directions"/>

                    <RunListItem item="Bear Paw" black bearPaw bearPawDirections="Bear Paw Directions"/>

                    <RunListItem item="Nitro" black nitro nitroDirections="Nitro Directions"/>

                    <RunListItem item="Bitterroot Basin" blue bitterrootBasin bitterrootBasinDirections="Bitterroot Basin Directions"/>

                    <RunListItem item="B-2" blue bTwo bTwoDirections="B-2 Directions"/>

                    <RunListItem item="B-3" blue bTwo bThreeDirections="B-3 Directions"/>

                    <RunListItem item="Buttercup Trail" green buttercupTrail buttercupTrailDirections="Buttercup Trail Directions"/>

                </b-list-group>
            </b-tab>

            <b-tab title="Map View" class="">
                <img src="../assets/bogus-map.png" class="img-fluid mx-auto d-block p-1" width="450px" />
            </b-tab>
        </b-tabs>

    </SectionScrollable>

    <Footer/>
  </div>
</template>

<script>
    import SectionScrollable from '@/components/SectionScrollable.vue'
    import HeaderLogo from '@/components/HeaderLogo.vue'
    import SearchButton from '@/components/SearchButton.vue'
    import RunListItem from '@/components/RunListItem.vue'
    import Footer from '@/components/Footer.vue'

    export default {
      name: 'Map',
      components: {
          SectionScrollable,
          HeaderLogo,
          SearchButton,
          RunListItem,
          Footer
      }
    }
</script>

<style>
    html, body {height: 100%; margin: 0; padding: 0}

    .body {
        display: flex;
        min-height: 100vh;
        flex-direction: column;
    }

    .list-group-item {
        border-top: none !important;
    }

</style>
