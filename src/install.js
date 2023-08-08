import vueCard from "./components/vueCard.vue";

function install(Vue) {
	if (install.installed) return;
	install.installed = true;
	Vue.component("vue-card", vueCard);
}

const plugin = {
	install,
};

let GlobalVue = null;
if (typeof window !== "undefined") {
	GlobalVue = window.Vue;
} else if (typeof global !== "undefined") {
	GlobalVue = global.vue;
}
if (GlobalVue) {
	GlobalVue.use(plugin);
}

vueCard.install = install;

export default vueCard;