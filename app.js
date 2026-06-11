const DEFAULT_STATE = {
  minCredits: 12,
  maxCredits: 24,
  maxSubjects: 5,
  completed: [],
  preferences: {}
};

const CURRICULUM = [
  { id: "31.08", name: "Sistemas de Representacion", shortName: "Sistemas", credits: 3, offeredIn: ["1C"], prereqs: [], semesterHint: 1 },
  { id: "72.03", name: "Introduccion a la Informatica", shortName: "Intro Info", credits: 3, offeredIn: ["1C"], prereqs: [], semesterHint: 1 },
  { id: "93.26", name: "Analisis Matematico I", shortName: "Analisis I", credits: 6, offeredIn: ["1C"], prereqs: [], semesterHint: 1 },
  { id: "93.58", name: "Algebra", shortName: "Algebra", credits: 9, offeredIn: ["1C"], prereqs: [], semesterHint: 1 },
  { id: "94.24", name: "Metodologia del Aprendizaje", shortName: "Metodologia", credits: 3, offeredIn: ["1C"], prereqs: [], semesterHint: 1 },
  { id: "72.31", name: "Programacion Imperativa", shortName: "PI", credits: 9, offeredIn: ["2C"], prereqs: ["72.03", "93.58"], semesterHint: 2 },
  { id: "93.28", name: "Analisis Matematico II", shortName: "Analisis II", credits: 6, offeredIn: ["2C"], prereqs: ["93.26", "93.58"], semesterHint: 2 },
  { id: "93.41", name: "Fisica I", shortName: "F1", credits: 6, offeredIn: ["2C"], prereqs: ["93.26"], semesterHint: 2 },
  { id: "93.59", name: "Matematica Discreta", shortName: "Mate Discreta", credits: 6, offeredIn: ["2C"], prereqs: ["93.58"], semesterHint: 2 },
  { id: "12.09", name: "Quimica", shortName: "Quimica", credits: 3, offeredIn: ["1C"], prereqs: [], semesterHint: 3 },
  { id: "72.32", name: "Diseno y Procesamiento de Documentos XML", shortName: "XML", credits: 3, offeredIn: ["1C"], prereqs: ["72.31"], semesterHint: 3 },
  { id: "72.33", name: "Programacion Orientada a Objetos", shortName: "POO", credits: 6, offeredIn: ["1C"], prereqs: ["72.31"], semesterHint: 3 },
  { id: "93.35", name: "Logica Computacional", shortName: "Logica", credits: 6, offeredIn: ["1C"], prereqs: ["93.58"], semesterHint: 3 },
  { id: "93.43", name: "Fisica III", shortName: "F3", credits: 6, offeredIn: ["1C"], prereqs: ["93.28", "93.41"], semesterHint: 3 },
  { id: "72.08", name: "Arquitectura de Computadoras", shortName: "Arqui", credits: 6, offeredIn: ["2C"], prereqs: ["72.31"], semesterHint: 4 },
  { id: "72.34", name: "Estructura de Datos y Algoritmos", shortName: "EDA", credits: 6, offeredIn: ["2C"], prereqs: ["72.33", "93.59"], semesterHint: 4 },
  { id: "93.24", name: "Probabilidad y Estadistica", shortName: "Proba", credits: 6, offeredIn: ["2C"], prereqs: ["93.28"], semesterHint: 4 },
  { id: "93.42", name: "Fisica II", shortName: "F2", credits: 6, offeredIn: ["2C"], prereqs: ["93.28"], semesterHint: 4 },
  { id: "72.11", name: "Sistemas Operativos", shortName: "SO", credits: 6, offeredIn: ["1C"], prereqs: ["72.08", "72.34"], semesterHint: 5 },
  { id: "72.35", name: "Ingenieria de Software I", shortName: "Ingesoft", credits: 6, offeredIn: ["1C"], prereqs: ["72.33"], semesterHint: 5 },
  { id: "72.36", name: "Interaccion Hombre-Computadora", shortName: "HCI", credits: 6, offeredIn: ["1C"], prereqs: ["72.32", "72.33"], semesterHint: 5 },
  { id: "72.37", name: "Base de Datos I", shortName: "BD", credits: 6, offeredIn: ["1C"], prereqs: ["72.34", "93.35"], semesterHint: 5 },
  { id: "72.07", name: "Protocolos de Comunicacion", shortName: "Protos", credits: 6, offeredIn: ["2C"], prereqs: ["72.11"], semesterHint: 6 },
  { id: "72.38", name: "Proyecto de Aplicaciones Web", shortName: "PAW", credits: 6, offeredIn: ["2C"], prereqs: ["72.11", "72.35", "72.36", "72.37"], semesterHint: 6 },
  { id: "72.39", name: "Automatas, Teoria de Lenguajes y Compiladores", shortName: "TLA", credits: 6, offeredIn: ["2C"], prereqs: ["72.34"], semesterHint: 6 },
  { id: "93.07", name: "Metodos Numericos", shortName: "MN", credits: 3, offeredIn: ["2C"], prereqs: ["93.28"], semesterHint: 6 },
  { id: "94.21", name: "Formacion General I", shortName: "Forma", credits: 3, offeredIn: ["2C"], prereqs: [], semesterHint: 6 },
  { id: "94.51", name: "Ingles I", shortName: "Ingles I", credits: 0, offeredIn: ["2C"], prereqs: [], semesterHint: 6 },
  { id: "61.23", name: "Economia para Ingenieros", shortName: "Eco", credits: 3, offeredIn: ["1C"], prereqs: [], requiresCredits: 120, semesterHint: 7 },
  { id: "61.32", name: "Derecho para Ingenieros", shortName: "Derecho", credits: 3, offeredIn: ["1C"], prereqs: [], requiresCredits: 120, semesterHint: 7 },
  { id: "72.40", name: "Ingenieria del Software II", shortName: "Inge 2", credits: 3, offeredIn: ["1C"], prereqs: ["72.35"], semesterHint: 7 },
  { id: "72.41", name: "Base de Datos II", shortName: "BD2", credits: 6, offeredIn: ["1C"], prereqs: ["72.11", "72.37"], semesterHint: 7 },
  { id: "72.42", name: "Programacion de Objetos Distribuidos", shortName: "POD", credits: 3, offeredIn: ["1C"], prereqs: ["72.07", "72.37"], semesterHint: 7 },
  { id: "93.75", name: "Metodos Numericos Avanzados", shortName: "MNA", credits: 6, offeredIn: ["1C"], prereqs: ["93.07"], semesterHint: 7 },
  { id: "72.25", name: "Simulacion de Sistemas", shortName: "Sims", credits: 6, offeredIn: ["2C"], prereqs: ["72.34", "93.75"], requiresCredits: 140, semesterHint: 8 },
  { id: "72.27", name: "Sistemas de Inteligencia Artificial", shortName: "SIA", credits: 6, offeredIn: ["2C"], prereqs: ["72.34", "93.24", "93.75"], requiresCredits: 120, semesterHint: 8 },
  { id: "72.43", name: "Gestion de Proyectos Informaticos", shortName: "GPI", credits: 3, offeredIn: ["2C"], prereqs: [], semesterHint: 8 },
  { id: "72.44", name: "Criptografia y Seguridad", shortName: "Cripto", credits: 6, offeredIn: ["2C"], prereqs: ["72.07"], semesterHint: 8 },
  { id: "12.83", name: "Seguridad Ocupacional y Ambiental", shortName: "SOA", credits: 3, offeredIn: ["1C"], prereqs: [], requiresCredits: 140, semesterHint: 9 },
  { id: "72.20", name: "Redes de Informacion", shortName: "Redes", credits: 6, offeredIn: ["1C"], prereqs: ["72.07"], requiresCredits: 171, semesterHint: 9 },
  { id: "72.45", name: "Proyecto Final", shortName: "Proyecto Final", credits: 12, offeredIn: ["1C"], prereqs: [], requiresCredits: 160, semesterHint: 9 },
  { id: "72.98", name: "Practica Laboral", shortName: "Practica Laboral", credits: 0, offeredIn: ["2C"], prereqs: [], requiresCredits: 144, semesterHint: 10 },
  { id: "94.23", name: "Formacion General III", shortName: "Forma 3", credits: 3, offeredIn: ["2C"], prereqs: [], requiresCredits: 168, semesterHint: 10 },
  { id: "94.52", name: "Ingles II", shortName: "Ingles II", credits: 0, offeredIn: ["2C"], prereqs: [], semesterHint: 10 }
];

const state = loadState();
let submittedSelection = loadSubmittedSelection();

const elements = {
  minCredits: document.querySelector("#minCredits"),
  maxCredits: document.querySelector("#maxCredits"),
  maxSubjects: document.querySelector("#maxSubjects"),
  subjectsChecklist: document.querySelector("#subjectsChecklist"),
  preferencesTable: document.querySelector("#preferencesTable"),
  preferenceSearch: document.querySelector("#preferenceSearch"),
  preferenceCounter: document.querySelector("#preferenceCounter"),
  termRoadmap: document.querySelector("#termRoadmap"),
  summaryCards: document.querySelector("#summaryCards"),
  subjectSearch: document.querySelector("#subjectSearch"),
  subjectCounter: document.querySelector("#subjectCounter"),
  submitPlanBtn: document.querySelector("#submitPlanBtn"),
  importBtn: document.querySelector("#importBtn"),
  importFileInput: document.querySelector("#importFileInput"),
  submissionStatus: document.querySelector("#submissionStatus"),
  resetProgressBtn: document.querySelector("#resetProgressBtn"),
  exportBtn: document.querySelector("#exportBtn"),
  remainingCreditsStat: document.querySelector("#remainingCreditsStat"),
  completedSubjectsStat: document.querySelector("#completedSubjectsStat"),
  estimatedTermsStat: document.querySelector("#estimatedTermsStat"),
  subjectCheckboxTemplate: document.querySelector("#subjectCheckboxTemplate")
};

const PREFERENCE_OPTIONS = [
  { value: "none", label: "Sin preferencia" },
  { value: "prefer", label: "Priorizar" },
  { value: "block", label: "Postergar" }
];

initialize();

function initialize() {
  syncInputs();
  bindEvents();
  renderAll();
}

function bindEvents() {
  elements.minCredits.addEventListener("input", () => {
    state.minCredits = clampNumber(elements.minCredits.value, 0, 40, 12);
    if (state.minCredits > state.maxCredits) {
      state.maxCredits = state.minCredits;
    }
    persistState();
    syncInputs();
    renderSubmissionStatus();
  });

  elements.maxCredits.addEventListener("input", () => {
    state.maxCredits = clampNumber(elements.maxCredits.value, 1, 40, 24);
    if (state.maxCredits < state.minCredits) {
      state.minCredits = state.maxCredits;
    }
    persistState();
    syncInputs();
    renderSubmissionStatus();
  });

  elements.maxSubjects.addEventListener("input", () => {
    state.maxSubjects = clampNumber(elements.maxSubjects.value, 1, 12, 5);
    persistState();
    syncInputs();
    renderSubmissionStatus();
  });

  elements.submitPlanBtn.addEventListener("click", () => {
    submittedSelection = snapshotState();
    persistSubmittedSelection();
    renderSubmissionStatus();
    renderResults();
  });

  elements.importBtn.addEventListener("click", () => {
    elements.importFileInput.click();
  });

  elements.importFileInput.addEventListener("change", importProgressFromFile);

  elements.subjectSearch.addEventListener("input", renderChecklist);
  elements.preferenceSearch.addEventListener("input", renderPreferences);

  elements.resetProgressBtn.addEventListener("click", () => {
    state.completed = [];
    state.preferences = {};
    persistState();
    renderAll();
  });

  elements.exportBtn.addEventListener("click", exportProgress);
}

function syncInputs() {
  elements.minCredits.value = state.minCredits;
  elements.maxCredits.value = state.maxCredits;
  elements.maxSubjects.value = state.maxSubjects;
}

function renderAll() {
  sanitizeState();
  syncInputs();
  renderChecklist();
  renderPreferences();
  renderSubmissionStatus();
  renderResults();
}

function renderChecklist() {
  const search = elements.subjectSearch.value.trim().toLowerCase();
  const completed = new Set(state.completed);
  const visibleSubjects = CURRICULUM.filter((subject) => {
    if (!search) {
      return true;
    }
    return `${subject.name} ${subject.shortName || ""} ${subject.id}`.toLowerCase().includes(search);
  });

  elements.subjectsChecklist.innerHTML = "";
  visibleSubjects.sort(compareSubjects).forEach((subject) => {
    const node = elements.subjectCheckboxTemplate.content.firstElementChild.cloneNode(true);
    const checkbox = node.querySelector("input");
    const title = node.querySelector("strong");
    const detail = node.querySelector("small");

    checkbox.checked = completed.has(subject.id);
    checkbox.addEventListener("change", () => toggleCompleted(subject.id, checkbox.checked));
    title.textContent = `${subject.name} (${subject.id})`;
    detail.textContent = describeSubject(subject);
    elements.subjectsChecklist.appendChild(node);
  });

  elements.subjectCounter.textContent = `${visibleSubjects.length} materias visibles`;
}

function renderPreferences() {
  elements.preferencesTable.innerHTML = "";
  const completed = new Set(state.completed);
  const search = elements.preferenceSearch.value.trim().toLowerCase();
  const configurableSubjects = CURRICULUM
    .filter((subject) => !completed.has(subject.id))
    .filter((subject) => {
      if (!search) {
        return true;
      }
      return `${subject.name} ${subject.shortName || ""} ${subject.id}`.toLowerCase().includes(search);
    });

  configurableSubjects.sort(compareSubjects).forEach((subject) => {
    const row = document.createElement("div");
    row.className = "preference-row";

    const description = document.createElement("div");
    description.innerHTML = `
      <strong>${subject.name}</strong>
      <p>${describeSubject(subject)}</p>
    `;

    const select = document.createElement("select");
    select.innerHTML = PREFERENCE_OPTIONS
      .map((option) => `<option value="${option.value}">${option.label}</option>`)
      .join("");
    select.value = getSubjectPreference(subject.id).mode;
    select.addEventListener("change", () => {
      setSubjectPreference(subject.id, { mode: select.value });
      renderSubmissionStatus();
    });

    const readiness = document.createElement("div");
    readiness.innerHTML = getReadinessBadge(subject);

    row.append(description, select, readiness);
    elements.preferencesTable.appendChild(row);
  });

  elements.preferenceCounter.textContent = `${configurableSubjects.length} materias configurables`;
}

function renderResults() {
  if (!submittedSelection) {
    renderEmptyResults();
    return;
  }

  const plan = buildOptimalPlan(submittedSelection);
  const completed = new Set(submittedSelection.completed);
  const pendingCredits = getPendingSubjects(completed).reduce((sum, subject) => sum + getSubjectCredits(subject), 0);
  const completedCredits = getCompletedCredits(completed);
  const availableNow = getAvailableSubjects(completed, submittedSelection.preferences);

  elements.remainingCreditsStat.textContent = String(pendingCredits);
  elements.completedSubjectsStat.textContent = String(submittedSelection.completed.length);
  elements.estimatedTermsStat.textContent = String(plan.finished ? plan.terms.length : 0);

  renderSummaryCards(plan, pendingCredits, completedCredits, availableNow.length);
  renderRoadmap(plan);
}

function renderEmptyResults() {
  elements.remainingCreditsStat.textContent = "0";
  elements.completedSubjectsStat.textContent = "0";
  elements.estimatedTermsStat.textContent = "0";
  elements.summaryCards.innerHTML = `
    <article class="summary-card">
      <h3>Esperando envio</h3>
      <strong>-</strong>
      <p>Completa tu seleccion y apreta "Enviar seleccion" para calcular los cuatrimestres.</p>
    </article>
  `;
  elements.termRoadmap.innerHTML = `
    <article class="term-card">
      <h3>Sin plan calculado</h3>
      <p>El plan aparece recien despues de enviar tu seleccion actual.</p>
    </article>
  `;
}

function renderSummaryCards(plan, pendingCredits, completedCredits, availableCount) {
  const firstTerm = plan.terms[0];
  elements.summaryCards.innerHTML = `
    <article class="summary-card">
      <h3>Pendiente</h3>
      <strong>${pendingCredits}</strong>
      <p>creditos obligatorios que aun faltan aprobar.</p>
    </article>
    <article class="summary-card">
      <h3>Acumulados</h3>
      <strong>${completedCredits}</strong>
      <p>creditos ya conseguidos para destrabar materias con requisito de avance.</p>
    </article>
    <article class="summary-card">
      <h3>Disponibles ahora</h3>
      <strong>${availableCount}</strong>
      <p>${firstTerm ? `${firstTerm.totalCredits} creditos en la mejor seleccion para ${firstTerm.label}.` : "No hay materias disponibles con las restricciones actuales."}</p>
    </article>
  `;
}

function renderRoadmap(plan) {
  elements.termRoadmap.innerHTML = "";

  if (!plan.finished) {
    elements.termRoadmap.innerHTML = `
      <article class="term-card">
        <h3>No se pudo cerrar un plan completo</h3>
        <p>Con las restricciones actuales la app no encontro una ruta completa hasta graduarte. Revisa materias postergadas o el rango de creditos.</p>
      </article>
    `;
    return;
  }

  plan.terms.forEach((term, index) => {
    const article = document.createElement("article");
    article.className = "term-card";

    const pickedList = term.picked.length
      ? `<ul>${term.picked
          .map((subject) => `<li><strong>${subject.name}</strong> (${formatCredits(getSubjectCredits(subject))})<br>${subject.reasonText}</li>`)
          .join("")}</ul>`
      : "<p>Sin materias para este cuatri.</p>";

    const alternatives = term.alternatives.length
      ? `
        <div class="candidate-list">
          ${term.alternatives
            .map((subject) => `
              <article class="candidate-card">
                <h4>${subject.name} <span class="tag">${formatCredits(getSubjectCredits(subject))}</span></h4>
                <p>${subject.reasonText}</p>
              </article>
            `)
            .join("")}
        </div>
      `
      : "<p>No quedaron alternativas fuertes fuera de la seleccion.</p>";

    article.innerHTML = `
      <header>
        <div>
          <h3>${index + 1}. ${term.label}</h3>
          <p>${term.totalCredits} creditos | ${term.completedCreditsAfter} acumulados al cierre</p>
        </div>
        <div class="tag-row">
          <span class="tag">${term.picked.length} materias</span>
          <span class="tag">${term.newlyUnlocked} listas para el siguiente tramo</span>
        </div>
      </header>
      <section>
        <h4>Seleccion sugerida</h4>
        ${pickedList}
      </section>
      <section>
        <h4>Otras candidatas de ese cuatri</h4>
        ${alternatives}
      </section>
    `;

    elements.termRoadmap.appendChild(article);
  });
}

function buildOptimalPlan(selection) {
  const initialCompleted = new Set(selection.completed);
  const maxDepth = 20;
  const beamWidth = 40;
  let beam = [{
    completed: initialCompleted,
    terms: [],
    heuristic: evaluateState(initialCompleted, 0, selection)
  }];

  for (let depth = 0; depth < maxDepth; depth += 1) {
    const finished = beam.filter((node) => node.completed.size === CURRICULUM.length);
    if (finished.length) {
      return chooseBestFinishedState(finished);
    }

    const nextBeam = [];

    beam.forEach((node) => {
      const termLabel = `Cuatri ${node.terms.length + 1}`;
      const available = getAvailableSubjects(node.completed, selection.preferences).map((subject) =>
        scoreSubject(subject, node.completed, selection)
      );
      const combinations = generateTermCombinations(available, node.completed, selection);

      combinations.forEach((combo) => {
        const nextCompleted = new Set(node.completed);
        combo.picked.forEach((subject) => nextCompleted.add(subject.id));
        nextBeam.push({
          completed: nextCompleted,
          terms: [...node.terms, {
            label: termLabel,
            picked: combo.picked,
            alternatives: combo.alternatives,
            totalCredits: combo.totalCredits,
            completedCreditsAfter: getCompletedCredits(nextCompleted),
            newlyUnlocked: countUnlockedSubjects(nextCompleted)
          }],
          heuristic: evaluateState(nextCompleted, node.terms.length + 1, selection)
        });
      });
    });

    if (!nextBeam.length) {
      break;
    }

    beam = dedupeStates(nextBeam)
      .sort((a, b) => compareNodeQuality(a, b, selection))
      .slice(0, beamWidth);
  }

  const finished = beam.filter((node) => node.completed.size === CURRICULUM.length);
  if (finished.length) {
    return chooseBestFinishedState(finished);
  }

  return { finished: false, terms: [] };
}

function chooseBestFinishedState(states) {
  const best = states
    .slice()
    .sort((a, b) => {
      if (a.terms.length !== b.terms.length) {
        return a.terms.length - b.terms.length;
      }
      const aCredits = a.terms.reduce((sum, term) => sum + term.totalCredits, 0);
      const bCredits = b.terms.reduce((sum, term) => sum + term.totalCredits, 0);
      return bCredits - aCredits;
    })[0];

  return { finished: true, terms: best.terms };
}

function generateTermCombinations(available, completed, selection) {
  const forcedZeroCredit = available.filter((subject) => getSubjectCredits(subject) === 0);
  const positiveCandidates = available
    .filter((subject) => getSubjectCredits(subject) > 0)
    .sort((a, b) => b.score - a.score);

  const rawCombos = [];

  function dfs(index, picked, credits) {
    if (credits > selection.maxCredits) {
      return;
    }

    if (forcedZeroCredit.length + picked.length > selection.maxSubjects) {
      return;
    }

    if (index === positiveCandidates.length) {
      rawCombos.push({
        picked: [...forcedZeroCredit, ...picked],
        totalCredits: credits
      });
      return;
    }

    dfs(index + 1, picked, credits);

    picked.push(positiveCandidates[index]);
    dfs(index + 1, picked, credits + getSubjectCredits(positiveCandidates[index]));
    picked.pop();
  }

  dfs(0, [], 0);

  const viable = rawCombos.filter((combo) => combo.picked.length > 0);
  const aboveMin = viable.filter((combo) => combo.totalCredits >= selection.minCredits);
  const pool = aboveMin.length ? aboveMin : viable;

  if (!pool.length) {
    return [{
      picked: forcedZeroCredit,
      alternatives: [],
      totalCredits: 0,
      score: -999
    }];
  }

  return pool
    .map((combo) => enrichCombination(combo, available, completed, selection))
    .sort((a, b) => compareCombinationQuality(a, b, selection))
    .slice(0, 20);
}

function enrichCombination(combo, available, completed, selection) {
  const pickedIds = new Set(combo.picked.map((subject) => subject.id));
  const projectedCompleted = new Set([...completed, ...pickedIds]);
  const unlockedNext = countUnlockedSubjects(projectedCompleted);
  const creditsAfter = getCompletedCredits(projectedCompleted);
  const closenessPenalty = combo.totalCredits < selection.minCredits ? selection.minCredits - combo.totalCredits : 0;
  const preferenceBonus = combo.picked.reduce((sum, subject) => sum + subject.preferenceBoost, 0);
  const structuralValue = combo.picked.reduce((sum, subject) => sum + subject.score, 0);
  const graduationValue = creditsAfter * 0.2 + unlockedNext * 5;
  const inRange = combo.totalCredits >= selection.minCredits && combo.totalCredits <= selection.maxCredits;
  const targetCredits = Math.min(selection.maxCredits, Math.max(selection.minCredits, combo.totalCredits));
  const fitDistance = Math.abs(selection.maxCredits - targetCredits);

  return {
    ...combo,
    inRange,
    unlockedNext,
    structuralValue,
    fitDistance,
    alternatives: available
      .filter((subject) => !pickedIds.has(subject.id))
      .sort((a, b) => b.score - a.score)
      .slice(0, 4),
    score: structuralValue + graduationValue + preferenceBonus - closenessPenalty * 2 + (inRange ? 200 : 0) - fitDistance * 3
  };
}

function evaluateState(completed, termCount, selection) {
  const completedCredits = getCompletedCredits(completed);
  const unlocked = countUnlockedSubjects(completed);
  const remainingSubjects = CURRICULUM.length - completed.size;
  const remainingCredits = getPendingSubjects(completed).reduce((sum, subject) => sum + getSubjectCredits(subject), 0);
  const lowerBoundTerms = Math.ceil(remainingCredits / Math.max(selection.maxCredits, 1));
  return completed.size * 100 + completedCredits * 2 + unlocked * 8 - termCount * 35 - remainingSubjects * 3 - lowerBoundTerms * 25;
}

function dedupeStates(states) {
  const seen = new Map();

  states.forEach((stateNode) => {
    const key = Array.from(stateNode.completed).sort().join("|");
    const current = seen.get(key);
    if (!current || stateNode.heuristic > current.heuristic) {
      seen.set(key, stateNode);
    }
  });

  return Array.from(seen.values());
}

function compareCombinationQuality(a, b, selection) {
  if (a.inRange !== b.inRange) {
    return a.inRange ? -1 : 1;
  }
  if (a.totalCredits !== b.totalCredits) {
    return b.totalCredits - a.totalCredits;
  }
  if (a.unlockedNext !== b.unlockedNext) {
    return b.unlockedNext - a.unlockedNext;
  }
  if (a.picked.length !== b.picked.length) {
    return b.picked.length - a.picked.length;
  }
  if (a.structuralValue !== b.structuralValue) {
    return b.structuralValue - a.structuralValue;
  }
  return b.score - a.score;
}

function compareNodeQuality(a, b, selection) {
  const aLowerBound = a.terms.length + estimateRemainingTermsLowerBound(a.completed, selection);
  const bLowerBound = b.terms.length + estimateRemainingTermsLowerBound(b.completed, selection);

  if (aLowerBound !== bLowerBound) {
    return aLowerBound - bLowerBound;
  }

  const aPrefixCredits = scorePrefixCredits(a.terms);
  const bPrefixCredits = scorePrefixCredits(b.terms);
  if (aPrefixCredits !== bPrefixCredits) {
    return bPrefixCredits - aPrefixCredits;
  }

  return b.heuristic - a.heuristic;
}

function estimateRemainingTermsLowerBound(completed, selection) {
  const remainingCredits = getPendingSubjects(completed).reduce((sum, subject) => sum + getSubjectCredits(subject), 0);
  return Math.ceil(remainingCredits / Math.max(selection.maxCredits, 1));
}

function scorePrefixCredits(terms) {
  return terms.reduce((sum, term, index) => sum + term.totalCredits * (100 - index), 0);
}

function scoreSubject(subject, completed, selection = state) {
  const preference = getSubjectPreference(subject.id, selection.preferences).mode;
  const directUnlocks = CURRICULUM.filter((candidate) => {
    if (completed.has(candidate.id) || candidate.id === subject.id) {
      return false;
    }
    if (!candidate.prereqs.includes(subject.id)) {
      return false;
    }
    return candidate.prereqs.every((prereq) => prereq === subject.id || completed.has(prereq));
  }).length;

  const futureDependents = CURRICULUM.filter((candidate) => candidate.prereqs.includes(subject.id)).length;
  const creditWeight = Math.min(getSubjectCredits(subject) / Math.max(selection.maxCredits, 1), 0.75);
  const requiresGap = Math.max(0, (subject.requiresCredits || 0) - getCompletedCredits(completed));

  let preferenceBoost = 0;
  if (preference === "prefer") {
    preferenceBoost += 6;
  }
  if (preference === "block") {
    preferenceBoost -= 100;
  }

  const score =
    directUnlocks * 8 +
    futureDependents * 2 +
    creditWeight +
    preferenceBoost -
    requiresGap * 0.05;

  return {
    ...subject,
    score,
    preferenceBoost,
    reasonText: buildReasonText(subject, directUnlocks, futureDependents, preference)
  };
}

function buildReasonText(subject, directUnlocks, futureDependents, preference) {
  const reasons = [];

  if (directUnlocks > 0) {
    reasons.push(`desbloquea ${directUnlocks} materia${directUnlocks > 1 ? "s" : ""} de inmediato`);
  }
  if (futureDependents > 0) {
    reasons.push(`pega sobre ${futureDependents} correlativa${futureDependents > 1 ? "s" : ""} futura${futureDependents > 1 ? "s" : ""}`);
  }
  if (subject.requiresCredits) {
    reasons.push(`requiere ${subject.requiresCredits} creditos acumulados`);
  }
  if (preference === "prefer") {
    reasons.push("coincide con tu preferencia");
  }
  if (!reasons.length) {
    reasons.push("suma avance neto sin bloquear el plan");
  }

  return reasons.join(", ");
}

function getAvailableSubjects(completed, preferences = state.preferences) {
  return CURRICULUM.filter((subject) => {
    const preference = getSubjectPreference(subject.id, preferences).mode;
    if (completed.has(subject.id)) {
      return false;
    }
    if (preference === "block") {
      return false;
    }
    return isSubjectUnlocked(subject, completed);
  });
}

function isSubjectUnlocked(subject, completed) {
  if (!subject.prereqs.every((prereq) => completed.has(prereq))) {
    return false;
  }
  return getCompletedCredits(completed) >= (subject.requiresCredits || 0);
}

function getPendingSubjects(completed) {
  return CURRICULUM.filter((subject) => !completed.has(subject.id));
}

function countUnlockedSubjects(completed) {
  return CURRICULUM.filter((subject) => {
    if (completed.has(subject.id)) {
      return false;
    }
    return isSubjectUnlocked(subject, completed);
  }).length;
}

function getCompletedCredits(completed) {
  return CURRICULUM.reduce((sum, subject) => (
    completed.has(subject.id) ? sum + getSubjectCredits(subject) : sum
  ), 0);
}

function getSubjectCredits(subject) {
  return Number.isFinite(subject.credits) ? subject.credits : 0;
}

function toggleCompleted(subjectId, checked) {
  const completed = new Set(state.completed);
  if (checked) {
    completed.add(subjectId);
  } else {
    completed.delete(subjectId);
  }
  state.completed = Array.from(completed);
  persistState();
  renderChecklist();
  renderPreferences();
  renderSubmissionStatus();
}

function getReadinessBadge(subject) {
  const completed = new Set(state.completed);
  if (completed.has(subject.id)) {
    return `<span class="tag">Ya aprobada</span>`;
  }

  const missingPrereqs = subject.prereqs.filter((prereq) => !completed.has(prereq));
  const missingCredits = Math.max(0, (subject.requiresCredits || 0) - getCompletedCredits(completed));

  if (!missingPrereqs.length && missingCredits === 0) {
    return `<span class="tag">Lista para cursar</span>`;
  }

  const blockers = [];
  if (missingPrereqs.length) {
    blockers.push(`faltan correlativas: ${missingPrereqs.join(", ")}`);
  }
  if (missingCredits > 0) {
    blockers.push(`faltan ${missingCredits} creditos`);
  }
  return `<span class="tag">${blockers.join(" | ")}</span>`;
}

function setSubjectPreference(subjectId, preference) {
  state.preferences[subjectId] = preference;
  persistState();
}

function getSubjectPreference(subjectId, preferences = state.preferences) {
  return preferences[subjectId] || { mode: "none" };
}

function exportProgress() {
  const payload = {
    generatedAt: new Date().toISOString(),
    state,
    submittedSelection
  };

  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "progreso-itba-informatica.json";
  link.click();
  URL.revokeObjectURL(url);
}

function importProgressFromFile(event) {
  const [file] = event.target.files || [];
  if (!file) {
    return;
  }

  const reader = new FileReader();
  reader.onload = () => {
    try {
      const payload = JSON.parse(String(reader.result));
      const importedState = normalizeImportedState(payload);
      const importedSubmittedSelection = normalizeSelection(payload.submittedSelection);

      state.minCredits = importedState.minCredits;
      state.maxCredits = importedState.maxCredits;
      state.maxSubjects = importedState.maxSubjects;
      state.completed = importedState.completed;
      state.preferences = importedState.preferences;
      submittedSelection = importedSubmittedSelection;

      sanitizeState();
      persistState();
      persistSubmittedSelection();
      renderAll();
      elements.submissionStatus.textContent = "Progreso importado correctamente.";
      elements.submissionStatus.className = "status-text ok";
    } catch (error) {
      elements.submissionStatus.textContent = `Error al importar: ${error.message}`;
      elements.submissionStatus.className = "status-text error";
    } finally {
      elements.importFileInput.value = "";
    }
  };

  reader.onerror = () => {
    elements.submissionStatus.textContent = "Error al leer el archivo seleccionado.";
    elements.submissionStatus.className = "status-text error";
    elements.importFileInput.value = "";
  };

  reader.readAsText(file);
}

function loadState() {
  try {
    const raw = localStorage.getItem("materia-selector-state");
    if (!raw) {
      return structuredClone(DEFAULT_STATE);
    }
    const parsed = JSON.parse(raw);
    return { ...structuredClone(DEFAULT_STATE), ...parsed };
  } catch {
    return structuredClone(DEFAULT_STATE);
  }
}

function loadSubmittedSelection() {
  try {
    const raw = localStorage.getItem("materia-selector-submitted");
    return raw ? normalizeSelection(JSON.parse(raw)) : null;
  } catch {
    return null;
  }
}

function persistState() {
  localStorage.setItem("materia-selector-state", JSON.stringify(state));
}

function persistSubmittedSelection() {
  localStorage.setItem("materia-selector-submitted", JSON.stringify(submittedSelection));
}

function sanitizeState() {
  const validIds = new Set(CURRICULUM.map((subject) => subject.id));
  state.completed = state.completed.filter((id) => validIds.has(id));
  state.preferences = Object.fromEntries(
    Object.entries(state.preferences).filter(([id]) => validIds.has(id))
  );
  if (state.minCredits > state.maxCredits) {
    state.maxCredits = state.minCredits;
  }
  state.maxSubjects = clampNumber(state.maxSubjects, 1, 12, DEFAULT_STATE.maxSubjects);
  if (submittedSelection) {
    submittedSelection = normalizeSelection(submittedSelection);
    submittedSelection.completed = (submittedSelection.completed || []).filter((id) => validIds.has(id));
    submittedSelection.preferences = Object.fromEntries(
      Object.entries(submittedSelection.preferences || {}).filter(([id]) => validIds.has(id))
    );
    if (submittedSelection.minCredits > submittedSelection.maxCredits) {
      submittedSelection.maxCredits = submittedSelection.minCredits;
    }
    persistSubmittedSelection();
  }
  persistState();
}

function snapshotState() {
  return {
    minCredits: state.minCredits,
    maxCredits: state.maxCredits,
    maxSubjects: state.maxSubjects,
    completed: [...state.completed].sort(),
    preferences: structuredClone(state.preferences)
  };
}

function normalizeSelection(selection) {
  if (!selection) {
    return null;
  }

  const normalizedPreferences = Object.fromEntries(
    Object.entries(selection.preferences || {}).map(([id, preference]) => {
      const mode = preference?.mode;
      if (mode === "prefer-1C" || mode === "prefer-2C") {
        return [id, { mode: "prefer" }];
      }
      if (mode === "avoid-1C" || mode === "avoid-2C") {
        return [id, { mode: "block" }];
      }
      return [id, { mode: mode || "none" }];
    })
  );

  return {
    minCredits: selection.minCredits ?? DEFAULT_STATE.minCredits,
    maxCredits: selection.maxCredits ?? DEFAULT_STATE.maxCredits,
    maxSubjects: selection.maxSubjects ?? DEFAULT_STATE.maxSubjects,
    completed: Array.isArray(selection.completed) ? selection.completed : [],
    preferences: normalizedPreferences
  };
}

function normalizeImportedState(payload) {
  const sourceState = payload?.state || payload;
  if (!sourceState || typeof sourceState !== "object") {
    throw new Error("El archivo no contiene un progreso valido.");
  }

  const completed = Array.isArray(sourceState.completed) ? sourceState.completed : [];
  const preferences = Object.fromEntries(
    Object.entries(sourceState.preferences || {}).map(([id, preference]) => {
      const mode = preference?.mode;
      if (mode === "prefer-1C" || mode === "prefer-2C") {
        return [id, { mode: "prefer" }];
      }
      if (mode === "avoid-1C" || mode === "avoid-2C") {
        return [id, { mode: "block" }];
      }
      return [id, { mode: mode || "none" }];
    })
  );

  return {
    minCredits: Number.isFinite(sourceState.minCredits) ? sourceState.minCredits : DEFAULT_STATE.minCredits,
    maxCredits: Number.isFinite(sourceState.maxCredits) ? sourceState.maxCredits : DEFAULT_STATE.maxCredits,
    maxSubjects: Number.isFinite(sourceState.maxSubjects) ? sourceState.maxSubjects : DEFAULT_STATE.maxSubjects,
    completed,
    preferences
  };
}

function renderSubmissionStatus() {
  if (!submittedSelection) {
    elements.submissionStatus.textContent = "Todavia no enviaste una seleccion.";
    elements.submissionStatus.className = "status-text";
    return;
  }

  if (hasPendingChanges()) {
    elements.submissionStatus.textContent = "Hay cambios sin enviar. El plan mostrado corresponde a la ultima seleccion enviada.";
    elements.submissionStatus.className = "status-text error";
    return;
  }

  elements.submissionStatus.textContent = "La seleccion actual ya fue enviada y el plan mostrado esta actualizado.";
  elements.submissionStatus.className = "status-text ok";
}

function hasPendingChanges() {
  const current = JSON.stringify(snapshotState());
  const submitted = JSON.stringify({
    ...submittedSelection,
    completed: [...(submittedSelection.completed || [])].sort()
  });
  return current !== submitted;
}

function describeSubject(subject) {
  const chunks = [
    formatCredits(getSubjectCredits(subject)),
    subject.id,
    `cuatri ITBA ${subject.semesterHint || "-"}`,
    `correlativas: ${formatPrereqs(subject.prereqs)}`
  ];

  if (subject.requiresCredits) {
    chunks.push(`requiere ${subject.requiresCredits} creditos acumulados`);
  }

  return chunks.join(" | ");
}

function formatCredits(credits) {
  return `${credits} cr.`;
}

function formatPrereqs(prereqs) {
  return prereqs.length ? prereqs.join(", ") : "sin correlativas";
}

function compareSubjects(a, b) {
  return (a.semesterHint || 999) - (b.semesterHint || 999) || a.name.localeCompare(b.name, "es");
}

function clampNumber(value, min, max, fallback) {
  const parsed = Number.parseInt(value, 10);
  if (!Number.isFinite(parsed)) {
    return fallback;
  }
  return Math.max(min, Math.min(max, parsed));
}
