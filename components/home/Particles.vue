<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, reactive, watch } from 'vue'

const canvasRef = ref<HTMLCanvasElement | null>(null)
const canvasContainerRef = ref<HTMLDivElement | null>(null)
const context = ref<CanvasRenderingContext2D | null>(null)
const circles = ref<any[]>([])
const mouse = reactive<{ x: number; y: number }>({ x: 0, y: 0 })
const canvasSize = reactive<{ w: number; h: number }>({ w: 0, h: 0 })
const dpr = window.devicePixelRatio || 1

interface Props {
  quantity?: number
  staticity?: number
  ease?: number
}

const props = withDefaults(defineProps<Props>(), {
  quantity: 30,
  staticity: 50,
  ease: 50,
})
</script>


<template>
  <div ref="canvasContainerRef" aria-hidden="true">
    <canvas ref="canvasRef"></canvas>
  </div>
</template>