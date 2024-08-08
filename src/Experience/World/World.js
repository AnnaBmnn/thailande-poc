import Experience from '../Experience.js'
import Environment from './Environment.js'
// import Floor from './Floor.js'
// import Fox from './Fox.js'
import Mask from './Mask.js'
import Plans from './Plans.js'


export default class World
{
    constructor()
    {
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources

        // Wait for resources
        this.resources.on('ready', () =>
        {
            // Setup
            // this.floor = new Floor()
            // this.fox = new Fox()
            this.mask = new Mask()
            this.plans = new Plans()

            this.environment = new Environment()
        })
    }

    update()
    {
        if(this.mask)
            // this.mask.update()
        if(this.plans)
            this.plans.update()
    }
}