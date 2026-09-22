const soldiers = ["Ramirez", "Chen", "Williams", "Martinez", "Thompson"];

function rollCall(names) {
    for (const name of names) {
        console.log(name+ " reporting!")
    }
}
rollCall(soldiers)