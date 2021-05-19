import "./theme.css";
import Vue from "vue/dist/vue.esm";

const App = new Vue({
  el: "#app",
  data() {
    return {
      placeholderString: "Введите название заметки",
      title: "Список заметок",
      inputValue: "",
      notes: [],
    };
  },
  methods: {
    addNewNote() {
      if (this.inputValue !== "") {
        this.notes.push(this.inputValue);
        this.inputValue = "";
      }
    },
    removeNote(i) {
      this.notes.splice(i, 1);
    },
    toUpperCase(item) {
      return item.toUpperCase();
    },
  },
  computed: {
    doubleCount() {
      return this.notes.length * 2;
    },
  },
  watch: {
    inputValue(value) {
      if (value.length > 20) {
        this.inputValue = "";
      }
      console.log("changed", value);
    },
  },
});
