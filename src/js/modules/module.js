import { BoxBufferGeometry, MeshBasicMaterial, Mesh, Vector3 } from 'three';

export default class module {
    /**
     * Module
     */
    constructor(x, y, z) {
        this.origin = new Vector3(x, y, z);
        this.geometry = new BoxBufferGeometry( 1, 1, 1 );
        this.material = new MeshBasicMaterial( {color: 0x00ff00} );
        this.cube = new Mesh( geometry, material );
        scene.add( cube );

    }
}