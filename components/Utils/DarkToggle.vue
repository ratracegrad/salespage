<template>
	<div class="screenAppearance">
		<button class="switch switchAppearance" type="button" role="switch" :title="switchTitle" :aria-checked="isDark" @click="toggleAppearance">
			<span class="check">
				<span class="icon">
					<Icon name="i-material-symbols-sunny-outline" class="sun absolute top-[3px] left-[3px] text-[rgba(60, 60, 67, .78)]" size="12px" />
    			<Icon name="i-material-symbols-dark-mode" class="moon absolute top-[3px] left-[3px] text-black" size="12px" />
				</span>
			</span>
		</button>
	</div>
</template>

<script setup lang="ts">
const color = useColorMode()
const isDark = ref(color.value === 'dark')

const toggleAppearance = inject('toggle-appearance', () => {
  isDark.value = !isDark.value
	color.preference = color.value === 'dark' ? 'light' : 'dark'
})

const switchTitle = computed(() => {
  return isDark.value
    ? 'Switch to light theme'
    : 'Switch to dark theme'
})
</script>

<style scoped>
.screenAppearance {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 8px;
  padding: 12px 14px 12px 16px;
}

.text {
  line-height: 24px;
  font-size: 12px;
  font-weight: 500;
  color: rgba(60, 60, 67, .78);
}

.switch {
  position: relative;
  border-radius: 11px;
  display: block;
  width: 39px;
  height: 20px;
  flex-shrink: 0;
  border: 1px solid #3c3f44;
  background-color: rgba(101, 117, 133, .16);
  transition: border-color 0.25s !important;
}

.switch:hover {
  border-color: #a8b1ff;
}

.check {
  position: absolute;
  top: 0px;
  /*rtl:ignore*/
  left: 0px;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background-color: #fff;
  box-shadow: 0 1px 2px rgba(0, 0, 0, .04), 0 1px 2px rgba(0, 0, 0, .06);
  transition: transform 0.25s !important;
}

.sun {
  opacity: 1;
}

.moon {
  opacity: 0;
}

.dark .sun {
  opacity: 0;
}

.dark .moon {
  opacity: 1;
}

.dark .switchAppearance :deep(.check) {
  /*rtl:ignore*/
  transform: translateX(18px);
}
</style>