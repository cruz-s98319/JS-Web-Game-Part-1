
function newImage (src, left, bottom) {
    let gameAsset = document.createElement('img')
    gameAsset.src = src
    gameAsset.style.position = 'fixed'
    gameAsset.style.left = left
    gameAsset.style.bottom = bottom
    document.body.append(gameAsset)
    return gameAsset;
}

newImage('assets/green-character.gif', '100px', '100px')
newImage('assets/pine-tree.png', '450px', '200px')
newImage('assets/tree.png', '200px', '300px')
newImage('assets/pillar.png', '350px', '100px')
newImage('assets/crate.png', '150px', '200px')
newImage('assets/well.png', '500px', '425px')

function newItem (src, left, bottom) {
    let item = newImage(src, left, bottom)
    item.addEventListener('click', function(){
        item.remove()
    })
   return item;
}

newItem('assets/sword.png', '500px', '405px')
newItem('assets/shield.png', '165px', '185px')
newItem('assets/staff.png', '600px', '100px')