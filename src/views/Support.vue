<template>
    <div class="support__container">
        <h1>Support</h1>
        <p>
            If you have any questions or concerns, please contact any of the following organizations
        </p>

        <AppListItem v-for="(ngo, index) in ngos" :key="index" class="support__item">
            <h2>{{ ngo.name }}

            </h2>
            <div class="address">
                {{ ngo.address }}
            </div>
            <div>
                <Icon icon="mdi:phone" />
                {{ ngo.contact }}
            </div>

            <div>
                <Icon icon="mdi:web" /><a :href="ngo.website" target="_blank" rel="noopener noreferrer">
                    {{ ngo.website }}
                </a>
            </div>
            <div>
                <Icon icon="mdi:email" />
                {{ ngo.email }}
            </div>
        </AppListItem>

    </div>
</template>


<script lang="ts">
import ngo from '@/components/ngo';
import { defineComponent } from 'vue';
import AppListItem from '@/components/AppListItem.vue';
import type { NgoInterface } from '@/types';
import { Icon } from '@iconify/vue';
export default defineComponent({
    name: 'Support',
    components: {
        AppListItem,
        Icon
    },
    data: () => ({
        ngos: ngo as Array<NgoInterface>
    })
});
</script>

<style scoped>
.support__item {
    margin-top: 20px;
    padding: 20px;
    border-radius: 4px;
    box-shadow: 0px 3px 13px -7px rgba(0, 0, 0, 0.79);
    -webkit-box-shadow: 0px 3px 13px -7px rgba(0, 0, 0, 0.79);
    -moz-box-shadow: 0px 3px 13px -7px rgba(0, 0, 0, 0.79);
    box-shadow: none;
    margin-top: 50px;

}

.support__item h2 {
    font-size: 1.5rem;
    font-weight: 500;
    text-transform: capitalize;
}

.support__item .address {
    display: flex;
    align-items: center;
    margin-bottom: 25px;
}

.support__item h2 svg {
    font-size: 20px;
    margin-bottom: 20px;
    font-weight: 500;
    text-transform: capitalize;

}

a {
    color: #101010;
}

svg {
    color: #ccc;
    text-decoration: none;
}

.support__item div {
    margin-bottom: 15px;
    display: flex;
    align-items: center;
}

.support__item div svg {
    margin-right: 10px;
}
</style>