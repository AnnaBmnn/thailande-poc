import * as THREE from 'three'
import Experience from '../Experience.js'

export default class Plans
{
    constructor()
    {
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources
        this.time = this.experience.time
        this.audio = this.experience.world.audio
        this.textures = [
            this.resources.items.picture1Texture,
            this.resources.items.picture2Texture,
            this.resources.items.picture3Texture,
        ]
        this.meshes = []

        this.setGeometry()


        for(let i = 0; i < this.textures.length; i++){
            this.setMaterial(i)
            this.setMesh(i)
        }

    }

    setGeometry()
    {
        this.geometry = new THREE.PlaneGeometry( 10, 10);
    }

    setMaterial(i)
    {
        this.material = new THREE.MeshStandardMaterial({
            map: this.textures[i],
            normalMap: this.textures[i],
            transparent: true,
            opacity: 0.8,
            side: THREE.DoubleSide
        })
    }

    setMesh(i)
    {
        this.mesh = new THREE.Mesh(this.geometry, this.material)
        this.mesh.position.z = -3 + i * 0.1
        // this.mesh.rotation.x = - Math.PI * 0.5

        this.mesh.receiveShadow = true
        this.scene.add(this.mesh)
        this.meshes.push(this.mesh)
    }
    update()
    {
        if(this.meshes && this.meshes.length > 0)
        {
            for(let i = 0; i < this.meshes.length; i++ ){
                this.meshes[i].position.x = Math.cos(this.time.elapsed * 0.0001 + i) * 10
                this.meshes[i].position.z = -3 + i * 0.1 + Math.sin(this.time.elapsed * 0.0001 + i) * 10
            }

        }
    }
}