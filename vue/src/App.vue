<template>
    <DxButton
        text="Open popup"
        @click="togglePopup"
    />
    <DxPopup
        v-model:visible="isPopupVisible"
        :close-on-outside-click="true"
        :show-title="true"
        title="Information"
        :height="500"
        :width="500"
        :resize-enabled="true"
        :drag-enabled="true"
        position="center"
    >
        <template #content>
            <DxScrollView
                height="100%"
                width="100%"
            >
                <img src="./assets/dx-logo.png" alt="logo">
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Penatibus et magnis dis parturient. Eget dolor morbi non arcu risus. Tristique magna sit amet purus gravida quis blandit.
                    Auctor urna nunc id cursus metus aliquam eleifend mi in. Tellus orci ac auctor augue mauris augue neque gravida. Nullam vehicula ipsum a arcu.
                    Nullam ac tortor vitae purus faucibus ornare suspendisse sed nisi. Cursus in hac habitasse platea dictumst. Egestas dui id ornare arcu.
                    Dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim.
                </p>
                <p>
                    Mauris rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar. Neque volutpat ac tincidunt vitae semper quis lectus.
                    Sed sed risus pretium quam vulputate dignissim suspendisse in. Urna nec tincidunt praesent semper feugiat nibh sed pulvinar.
                    Ultricies lacus sed turpis tincidunt id aliquet risus feugiat. Amet cursus sit amet dictum sit amet justo donec enim.
                    Vestibulum rhoncus est pellentesque elit ullamcorper. Id aliquet risus feugiat in ante metus dictum at.
                </p>
            </DxScrollView>
        </template>
    </DxPopup>
</template>

<script>
import { DxButton, DxPopup, DxScrollView } from "devextreme-vue";


export default {
    components: {
        DxButton,
        DxPopup,
        DxScrollView
    },
    data() {
        return {
            isPopupVisible: true,
        };
    },
    methods: {
        togglePopup() {
            this.isPopupVisible = !this.isPopupVisible;
        }
    }
};
</script>

<style scoped>
    img {
        width: 100%;
        height: 250px;
        object-fit: cover;
    }
</style>
