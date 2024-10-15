// Función para cargar los hábitos desde el Local Storage
function loadHabits() {
    const habits = JSON.parse(localStorage.getItem('habits')) || [];
    const habitList = document.getElementById('habit-list');
    habitList.innerHTML = ''; // Limpiar la lista actual

    habits.forEach((habit, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <input type="checkbox" id="habit-${index}" ${habit.completed ? 'checked' : ''} onchange="toggleHabit(${index})">
            <label for="habit-${index}" style="${habit.completed ? 'text-decoration: line-through; color: gray;' : ''}">${habit.name}</label>
            <button onclick="removeHabit(${index})">Eliminar</button>`;
        habitList.appendChild(li);
    });
}

// Función para agregar un nuevo hábito
function addHabit() {
    const habitInput = document.getElementById('habit-input');
    const newHabit = habitInput.value.trim();

    if (newHabit) {
        const habits = JSON.parse(localStorage.getItem('habits')) || [];
        habits.push({ name: newHabit, completed: false });
        localStorage.setItem('habits', JSON.stringify(habits));
        habitInput.value = ''; // Limpiar el input
        loadHabits(); // Recargar la lista
    }
}

// Función para eliminar un hábito
function removeHabit(index) {
    const habits = JSON.parse(localStorage.getItem('habits'));
    habits.splice(index, 1);
    localStorage.setItem('habits', JSON.stringify(habits));
    loadHabits(); // Recargar la lista
}

// Función para marcar o desmarcar un hábito
function toggleHabit(index) {
    const habits = JSON.parse(localStorage.getItem('habits'));
    habits[index].completed = !habits[index].completed;
    localStorage.setItem('habits', JSON.stringify(habits));
    loadHabits(); // Recargar la lista
}

// Función para agregar hábitos sugeridos
function addSuggestedHabit(suggestedHabit) {
    const habits = JSON.parse(localStorage.getItem('habits')) || [];
    if (!habits.some(habit => habit.name === suggestedHabit)) {
        habits.push({ name: suggestedHabit, completed: false });
        localStorage.setItem('habits', JSON.stringify(habits));
        loadHabits(); // Recargar la lista
    }
}

// Event listener para el botón de agregar hábito
document.getElementById('add-habit').addEventListener('click', addHabit);

// Cargar hábitos al inicio
loadHabits();