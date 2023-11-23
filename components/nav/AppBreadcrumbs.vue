<template>
    <ol class="ml-3 flex items-center whitespace-nowrap min-w-0 gap-1">
        <li :class="styles">
            <ULink :to="'/'" class="title">
                Home
            </ULink>
        </li>
        <li :class="styles">
            <UIcon name="i-heroicons-chevron-right-20-solid" />
        </li>
        <li v-for="(item, i) in crumbs" :key="i"
            class="text-sm font-semibold text-tuna truncate dark:text-slate-300 capitalize">
            <ULink :to="item.to" class="title">
                {{ item.title }}
            </ULink>
        </li>
    </ol>
</template>
  
<script setup lang="ts">
import type { BreadcrumbsData } from '@/interface'
const styles = 'flex items-center text-sm text-tuna dark:text-slate-300'

const crumbs = computed<readonly BreadcrumbsData[]>(() => {
    const route = useRoute()
    const pathArray = route.path.split('/')
    pathArray.shift()
    const breadcrumbs: BreadcrumbsData[] = pathArray.reduce((breadcrumbArray: BreadcrumbsData[], path, idx) => {
        breadcrumbArray.push({
            to: breadcrumbArray[idx - 1]
                ? '/' + breadcrumbArray[idx - 1].path + '/' + path
                : '/' + path,
            title: path,
            path: undefined
        })
        return breadcrumbArray
    }, [])
    return breadcrumbs
})
</script>