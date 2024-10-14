class Seaweed {
    constructor(name, description) {
        this.name = name;
        this.description = description;
    }
}

class SeaweedManager {
    constructor() {
        this.seaweeds = [];
    }

    addSeaweed(seaweed) {
        this.seaweeds.push(seaweed);
        this.renderSeaweedList();
    }

    deleteSeaweed(index) {
        this.seaweeds.splice(index, 1);
        this.renderSeaweedList();
    }

    renderSeaweedList() {
        const list = document.getElementById('seaweedList');
        list.innerHTML = '';

        this.seaweeds.forEach((seaweed, index) => {
            const listItem = document.createElement('li');
            listItem.className = 'list-group-item';
            listItem.innerHTML = `
                <span>${seaweed.name}: ${seaweed.description}</span>
                <button class="btn btn-danger btn-sm" onclick="deleteSeaweed(${index})">Hapus</button>
            `;
            list.appendChild(listItem);
        });
    }
}

const manager = new SeaweedManager();

document.getElementById('crudForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const description = document.getElementById('description').value;

    const seaweed = new Seaweed(name, description);
    manager.addSeaweed(seaweed);

    document.getElementById('crudForm').reset();
});

function deleteSeaweed(index) {
    manager.deleteSeaweed(index);
}
