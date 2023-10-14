<script setup>
import { ref, computed } from "vue";
import CreateListing from "./admin/CreateListing.vue";
import ViewListingsVue from "./ViewListings.vue";

const routes = {
  //   "/": Home,
  "/create": CreateListing,
  "/listings": ViewListingsVue,
};

const currentPath = ref(window.location.hash);

window.addEventListener("hashchange", () => {
  currentPath.value = window.location.hash;
});

const currentView = computed(() => {
  return routes[currentPath.value.slice(1) || "/"]; // || NotFound;
});
</script>

<template>
  <div class="nav">
    <div class="nav-links">
      <a href="#/create">Create Listing</a>
      <a href="#/listings">Listings</a>
    </div>
  </div>
  <component :is="currentView" />
</template>

<style scoped>
.nav {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.nav-links {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid rgba(0, 0, 0, 0.181);
  width: 30%;
  margin: 20px 20px;
}
a {
  text-decoration: none;
  padding: 10px 20px;
  color: darkgreen;
  font-size: 16px;
}
a:hover {
  color: blue;
}
</style>
