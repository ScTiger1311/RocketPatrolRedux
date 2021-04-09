class Rocket extends Phaser.GameObjects.Sprite
{
    constructor(scene, x, y, texture, frame, )
    {
        super(scene, x, y, texture, frame);

        //add object to existing scene
        scene.add.existing(this);
        this.isFiring = false;      //track rocket firing status
        this.moveSpeed = 2;         //pixels per frame
    }

    update(time, delta)
    {
        let deltaMultiplier = (delta/16.66667);
        //left/rigth movemement
        if(this.isFiring == false)
        {
            if(keyLEFT.isDown == true && this.x >= borderUISize + this.width)
            {
                this.x -= this.moveSpeed * deltaMultiplier;

            }
            else if (keyRIGHT.isDown == true && this.x <= game.config.width - borderUISize - this.width)
            {
                this.x += this.moveSpeed * deltaMultiplier;
            }
        }

    }
}