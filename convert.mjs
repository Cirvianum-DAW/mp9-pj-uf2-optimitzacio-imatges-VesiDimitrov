// Importcio de les llibreries i paquets a utilitzar
import imagemin from 'imagemin';
import imageminWebp from 'imagemin-webp';

// Ruta d'entrada de les imatges a optimitzar
const imputPath = './src/Images';

// Ruta de sortida de les imatges optimitzades en format WebP
const outputPath = './src/output';

//Configuracio d'imagemin
const config = {
    plugins: [
        imageminWebp({
            quality: 75 // Qualitat d'exportacio i compressio de les imatges
        })
    ]
};

//Proces d'optimitzacio de les imatges a traves d'imagemin
async function optimizeImages() {
    try {
        await imagemin([`${imputPath}/*.{jpg,jpeg,png}`], { //Cerca de la ruta d'entrada de les imatges
            destination: outputPath, //Ruta de sortida de les imatges optimitzades
            ...config,
        });
    
    console.log('Realitzat correctament la optimitzacio de les imatges');
    } catch (error) {
        console.error('Error al optimitzar les imatges', error);
    }
}

optimizeImages(); //Execucio de la funcio d'optimitzacio de les imatges