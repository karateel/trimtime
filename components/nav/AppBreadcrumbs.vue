<template>
    <ul class="breadcrumbs">
        <li v-for="(crumb, i) in crumbs" :key="i">
            <nuxt-link :to="crumb.path">
                {{ crumb.name }}
            </nuxt-link>
            <span v-if="i < crumbs.length - 1">></span>
        </li>
    </ul>
</template>
  
<script lang="ts" setup>

interface Crumb {
    path: string
    name: string
}

const crumbs = computed<Crumb[]>(() => {
    const route = useRoute()

    const crumbs = []
    route.matched.forEach((item, i, { length }) => {
        const crumb: Crumb = {}
        crumb.path = item.path
        crumb.name = item.meta.breadcrumbTitle

        crumbs.push(crumb)
    })

    return crumbs
})
</script>