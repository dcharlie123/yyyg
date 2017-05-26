import Vue from 'vue';
const construct=Vue.extend(require('./confirm.vue'));
const confirm=(options={})=>{
    var instance=new construct().$mount(document.createElement('div'));
    instance.text=options.text||'';
    instance.index=options.index||null;
    document.body.appendChild(instance.$el);
    return instance;
}
export default confirm;