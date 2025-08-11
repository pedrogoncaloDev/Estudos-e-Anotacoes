<template>
  <main>
    <!-- EXEMPLO 1: ref (um valor) -->
    <section class="card">
      <h2>ref: caixinha reativa p/ um valor</h2>
      <p><strong>count:</strong> {{ count }}</p>
      <div class="controls">
        <button @click="count++">+1</button>
        <button @click="count = 0">reset</button>
      </div>
    </section>

    <!-- EXEMPLO 2: reactive (objeto inteiro) -->
    <section class="card">
      <h2>reactive: objeto inteiro reativo</h2>
      <label>
        Nome:
        <input v-model="user.name" placeholder="Fulano" />
      </label>
      <label>
        Idade:
        <input type="number" v-model.number="user.age" />
      </label>

      <div class="actions">
        <button @click="addSkill">Adicionar skill</button>
        <button @click="resetUser">Resetar usuário</button>
      </div>

      <p><strong>user:</strong> {{ user }}</p>
      <p><strong>skills:</strong> {{ user.skills.join(', ') || '(nenhuma)' }}</p>
    </section>

    <!-- ARMADILHA: desestruturar um reactive "quebra" reatividade -->
    <section class="card">
      <h2>Armadilha clássica</h2>

      <p>
        <strong>name (quebrado):</strong> {{ brokenName }} —
        <em>não atualiza ao digitar acima</em>
      </p>
      <p>
        <strong>name (correto com toRefs):</strong> {{ name }}
      </p>

      <div class="explain">
        <p class="lead">Por que quebra?</p>
        <p>
          <strong>Você copia o valor</strong> pra fora do <code>reactive()</code> e
          perde o <em>Proxy</em> que o Vue usa pra rastrear mudanças.
        </p>
        <ul>
          <li>
            <strong>Errado:</strong> <code>const brokenName = user.name</code> (vira
            string comum, não reage).
          </li>
          <li>
            <strong>Certo:</strong>
            <code>const { name } = toRefs(user)</code> ou
            <code>toRef(user, 'name')</code> ou
            <code>computed(() =&gt; user.name)</code>.
          </li>
        </ul>

        <div class="code-block">
          <pre><code>// Errado: perde o “fio” reativo
          const brokenName = user.name;

          // Certo: mantém o vínculo com o objeto reativo
          const { name } = toRefs(user);
          // ou
          // const name = toRef(user, 'name');
          // ou
          // const name = computed(() =&gt; user.name);
          </code></pre>
        </div>

        <p class="rule">
          <strong>Regra de bolso:</strong> vai “tirar” uma prop de um
          <code>reactive()</code>? use <code>toRef</code>/<code>toRefs</code> (ou
          <code>computed</code>). Ou use <code>user.name</code> direto.
        </p>
      </div>
    </section>
  </main>
</template>

<script setup>
import { ref, reactive, toRefs, watch } from "vue";

// REF: um valor
const count = ref(0);
watch(count, (n, o) => console.log("[ref] count:", o, "→", n));

// REACTIVE: objeto inteiro
const user = reactive({
  name: "Pedro",
  age: 18,
  skills: ["Vue"],
});

function addSkill() {
  user.skills.push(`Skill ${user.skills.length + 1}`);
}

function resetUser() {
  Object.assign(user, { name: "", age: 18, skills: [] });
}

const brokenName = user.name;
const { name } = toRefs(user);

watch(
  () => user.name,
  (n, o) => console.log("[reactive] user.name:", o, "→", n)
);
watch(
  () => user.skills.length,
  (n, o) => console.log("[reactive] skills len:", o, "→", n)
);
</script>

<style scoped>
main {
  display: grid;
  gap: 1rem;
  font-family: system-ui;
  max-width: 700px;
  margin: auto;
}

.card {
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 12px;
}

.controls {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.actions {
  margin: 0.5rem 0;
}

button {
  padding: 0.5rem 0.75rem;
  border: 1px solid #888;
  border-radius: 8px;
  background: #f8f8f8;
  cursor: pointer;
}

label {
  display: block;
  margin: 0.25rem 0;
}

input {
  margin-left: 0.5rem;
}
</style>
