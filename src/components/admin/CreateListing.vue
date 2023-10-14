<!-- Will contain a form for adding a listing -->
<script setup>
import { ref, onMounted } from "vue";
import createListingFields from "../../library/createListingFields";

const step = ref(1);
const stepFields = ref([]);
const formFields = createListingFields;

const fieldsPerStep = () => {
  if (step.value === 1) {
    console.log(formFields.slice(0, 7));
    stepFields.value = formFields.slice(0, 8);
  } else if (step.value === 2) {
    stepFields.value = formFields.slice(8, 16);
  } else {
    stepFields.value = formFields.slice(16, 24);
  }
};
onMounted(() => fieldsPe rStep());
</script>

<template>
  <div class="text-center">
    {{ stepFields }}
    <v-sheet max-width="800" class="mx-auto">
      <v-form @submit.e.prevent>
        <v-container>
          <v-row v-for="(field, index) in stepFields" :key="index">
            <v-col class="d-flex flex-column justify-center flex-wrap v-col-5">
              <label class="text-left" for="">{{ field.label }}</label>
              <v-text-field
                v-if="field.input === 'text'"
                class="my-3"
                variant="solo-inverted"
                :label="field.label"
                density="compact"
              >
              </v-text-field>

              <v-textarea
                v-else-if="field.input === 'text-area'"
                :label="field.label"
                auto-grow
              ></v-textarea>

              <v-select
                v-else-if="field.input === 'select'"
                :items="field.selections"
                item-title="state"
                item-value="abbr"
                label="Select"
                persistent-hint
                return-object
                single-line
              ></v-select>
            </v-col>
            <v-col> </v-col>
          </v-row>
          <div class="d-flex justify-space-between form-navigation">
            <v-btn color="orange" class="text-white">Previous</v-btn>
            <v-btn color="success">Next</v-btn>
          </div>
        </v-container>
      </v-form>
    </v-sheet>
  </div>
</template>

<style scoped></style>
