import * as PIXI from 'pixi.js'
import { Spine } from 'pixi-spine'

window.onload = () => {
  const app = new PIXI.Application({
    backgroundAlpha: 1,
    backgroundColor: 444,
    height: 600,
    width: 600
  })

  document.body.appendChild(app.view)

  const onAssetsLoaded = (loader: any, res: any) => {
    const animation = new Spine(res['spineboy-pro.atlas'].spineData)

    animation.x = app.screen.width / 2
    animation.y = app.screen.height
    animation.scale.set(0.5)

    app.stage.addChild(animation)
    animation.state.setAnimation(0, 'walk', true)
  }

  app.loader
    .add('spineboy-pro.atlas', '/assets/spine-data/spineboy-pro.json') // 本番用にビルドする際は第2引数を '/pub_web_pixi-spine_test/assets/spine-data/spineboy-pro.json' とする
    .load(onAssetsLoaded)

  app.stage.interactive = true
}
