<template>
    <div id="footer" class="align-self-end">
        <footer class="d-flex justify-content-between text-center pt-3 pl-4 pr-4 font-weight-bold">
            <b-link to="/home" class="nav-links">
                <b-icon icon="house-door" font-scale="2"></b-icon>
                <p>Home</p>
            </b-link>

            <b-link to="/explore" class="nav-links">
                <b-icon icon="tree" font-scale="2"></b-icon>
                <p>Explore</p>
            </b-link>

            <b-link to="/upload" class="nav-links">
                <b-icon icon="camera" font-scale="2"></b-icon>
                <p>Upload</p>
            </b-link>

            <b-link to="/map" class="nav-links">
                <b-icon icon="signpost-split" font-scale="2"></b-icon>
                <p>Map</p>
            </b-link>

            <b-link to="/account" class="nav-links">
                <b-icon icon="person" font-scale="2"></b-icon>
                <p>Account</p>
            </b-link>
        </footer>
    </div>
</template>

<style>

    #footer {
        background: #0a3153;
        color: #ffffff;
        width: 100%;
        height: 90px;
        flex-shrink: 0;
    }

    .nav-links {
        color: #ffffff !important;
        text-decoration: none;
    }
</style>
