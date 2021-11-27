import { BoxBufferGeometry, MeshBasicMaterial, Mesh, Vector3 } from 'three';

export default class module {
    /**
     * Add a 3D Object to the global scene.
     */
    constructor(x, y, z, scene) {
        this.origin = new Vector3(x, y, z);
        this.geometry = new BoxBufferGeometry( 1, 1, 1 );
        this.material = new MeshBasicMaterial( {color: 0x00ff00} );
        this.cube = new Mesh( this.geometry, this.material );
        scene.add( this.cube );
    }

    /**
     * rotate 3D Object
     */
    rotateObject() {
        this.cube.rotation.y += 0.01;
    }
}