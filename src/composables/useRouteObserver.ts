import { ref, computed, onMounted, onUnmounted } from "vue";
import { router } from "../router";
import { isTransitioning } from "./useProjectTransition";

// -----------------------------------------------------------------------------
// GLOBAL REACTIVE PATH
// -----------------------------------------------------------------------------

const getInitialPath = () => {
  if (typeof window === "undefined") return "/";
  const p = window.location.pathname;
  return p.startsWith("/Portfolio") ? p.substring("/Portfolio".length) : p;
};

export const path = ref(getInitialPath());

// -----------------------------------------------------------------------------
// COMPUTED HELPERS
// -----------------------------------------------------------------------------

export const isProjectRoute = (p: string) => {
  const clean = p.startsWith("/Portfolio") ? p.substring("/Portfolio".length) : p;
  return clean.match(/^\/project\/([^/]+)$/);
};

export const projectId = computed(() => {
  const match = isProjectRoute(path.value);
  return match ? match[1] : null;
});

export const projectVisible = computed(() => {
  return projectId.value !== null && !isTransitioning.value;
});

export const recentProject = ref<string | null>(null);

export const recentProjectId = computed(() => {
  if (projectId.value) {
    recentProject.value = projectId.value;
  }
  return recentProject.value;
});

// -----------------------------------------------------------------------------
// COMPOSABLE
// -----------------------------------------------------------------------------

export function useRouteObserver() {
  const update = () => {
    path.value = router.currentRoute.value.path;
  };

  let unwatch: (() => void) | null = null;

  onMounted(() => {
    update();
    unwatch = router.afterEach(() => {
      update();
    });
  });

  onUnmounted(() => {
    if (unwatch) unwatch();
  });

  return {
    path,
    projectId,
    recentProjectId,
  };
}
