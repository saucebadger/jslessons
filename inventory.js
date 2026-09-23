const inventory = ["PS3", "Dragonite", "Yu-Gi-Oh", "Mac Mini"];

function checkInventory(items) {
for (const item of items) {
    console.log(item+" is in stock!" )
}
}
checkInventory(inventory)