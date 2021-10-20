controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.vy == 0) {
        mySprite.vy = -200
    }
})
function checkLevel () {
    if (currentlevel == 1) {
        tiles.setTilemap(tilemap`level1`)
        scene.setBackgroundImage(img`
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb8ff3338888888888888888888888888888
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb8883333fffffffffffffffffffffffffffff
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb8883f3fffffffffffffffffffffffffffffff
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb8883ffffffffffffffffffffffffffffffffff
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb888ffffffffffffffffffffffffffffffffffff
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffffffff
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffffffff
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbffffffffffffccccccccccccccfffffffffffff
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfccccccccccccccccccccccccfffffffffffff
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccbbbbbbbbbbbbccccccccfffffffff
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccfffffff
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccc
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccc
            bbbbbbbbbbbbbbbbbbbbbbbbbbbb888333bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbb88883333fffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbb88ff33fffffffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbb88888ff33fffffffffffffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbb888fffff3fffffffffffffffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbfffffffffffffffffffffffccccccfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbffffffffffffffccccccccfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbfffffffffffcccccccfffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbfffffccccccccfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbfffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb883333fffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb888888883333ffffffffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbffffffff3fffffffffffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffcccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbffffffccccccccfffffffffcccccfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbffccccffffffffffffffcccfccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffffcccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfcccfcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb77777bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb7eee77bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb7eee1177bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbee3ebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb444bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb7eeee1177bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbb33eeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb4444444bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb77eeee11bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbb3eeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb444444444bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb77eeeee1bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbb3eeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb444444444bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb777eeeee11bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbb3eeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb6664666444bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb77eeeeeee1bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbb3eeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb66666666444bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb77eeeeeee1bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbb3eeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb66666666444bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb77eeeeeee1bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbb3eeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb86664e66644bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb77eeeeeee1bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbee11116644bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb77eeeeeee1bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb3eee1116644bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb7eeeeeeee1bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb3eeee116444bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb777eeeee11bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb3eeee11444bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb777eeeee1bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb3eeee1144bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb77eeeee11bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbeeee1ebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb3eeeee1bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb77eeeee1bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbeeee1e1bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb3eeeee1bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb77eeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb222
            bbbb77bbbbbbbbbbeeee1e1bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb3eeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb773eeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbb22aa
            bb77777bbbbbbbbbeeee1e1bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb733eeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbb22aa2
            7777377777222222eeee116666bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb7733eeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbb23aa22
            7733332222222222eee1e16666bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb773eeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbb33aa222
            3332222222222222eee1e166642bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb73eeeeeebbbbbbbbbbbbbbbbbbbbbbbbbb33aa2222
            2222222222222222eee11d666422222222bbbbbbbeeeebbbbbbbbbbbbbbbbeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb733eeeeeebbbbbbbbbbbbbbbbbbbbbbbb22aaa22222
            2222222222222222eee1dd664422222222222222aee2eeeeebbbbbbbbbbbbeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb733eeeeeebbbbbbbbbbbbbbbbbbbb3332aaa2222222
            2222222266422222eee1d4444222222222222222222222222eeeeeeebbbbbeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb733eeeeeebbbbbbbbbbbbbbb3233332aaa222222222
            2222222644422222eee1d444422222222222222222222aaaaa22222eebbbbeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb73eeeeeeebbbbbbbbbbbb3333322aaaaa2222222222
            222222644222222222e164442222222222222222222222222aaaa222eebbbeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb73eeeeeeebbbbbbbbb333222aaaa2aa222222222222
            2222664422222222221d66642222222222222222222222222222aaa22222beeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb77777bb77b77bb73eeeeeedbbbb2233332222a2222222222222222222
            2222644222222222222266442222222222222222222222222222222222222eeee11bbabbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb7777bb777722222233eeeeeedd222222222222222222222222222222222
            2222624222222222222222422222222222222222222222222222222222222eeee1dd2222222222222b7777777777777777777eee222aaa22222223eeeeeeed2222222222222222222222222222222222
            2222242222222222222222222222222222222222222222222222222222222eeee1dd22222222222222222222222222222eeeee2222222222222222eeeeeeedd222222222222222222222222222222222
            2222222222222222222222222222222222222222222222222222222222222eeee1dd222222222222222222222222222222222a22222222d2222222eeeeeeedd222222222222222222222222222222222
            22222222222222222222222222ee222222222222222222222222222222222eeee1d22aa22222222222222222222222222222222222222222222222eeeeeeee1d22222222222222222222222222222222
            222222222222222222266622eee12222222222222222222222222222222223eee1d2aa222222222222222222222222222222222222222222222222eeeeeee11dd2222222222222222222222222222222
            22222222222222222266666eee11222222222222222222222222222222222e3ee1daa2222222222222222222222222222222222222222222222222eeeeeee11dd2222222222222222222222222222222
            22222222222222222266666ee1dd2a2222222222222222222222222222222e3ee2aa22222222222222222222222222222222222222222222222222eeeeeeee1dd2222222222222222222222222222222
            22222222222222222266666e1ddaaa222222222222222222222222222222223eeaa222222222222222222222222222222222222222222222222222eeeeeeee1dd2222222222222222222222222222222
            2222222222222222226666eeadaa2222222222222222222222222222222222222a2222222222222222222222222222222222222222224222222222eeeeeeee1d22222222222222222222222221222222
            2222222222222222226666612aa222222222222222222222222222222222222222222222222222222222222222222222222222222226422222222eeeeeeeeedd22222222222222222222eeeeed222222
            222222222222222222226661aa2222222222222222222222222222222222222222222222222222222222222222222d22222222222226422222222eeeeaeee1d22222222222222222eeeee21ddda22222
            222222222222222222222662a2aaa222222222222222222222222222222222222222222222222222222222222222dd22222222222264422222222eeeeaeee1d2a222222222222eeee11dddddaaa22222
            2222222222222222222222222aa222222222222222222222222222222222222222222666666664222222222222ddd222222222222244422222222eeeeaeee1d2a22222222222211122a2daaaa2222222
            222222222222222222222222a222222222222222222222222222222222222222222226666666642222222222222dd222222222222644222222222eee2aaee1ddaa222222222222222222222222222222
            2222222222222222222222222222222222222222222222222222222222222222222e26666666642222222222222dd2222222222226242222222222222aaeeddda2222222222222222222222222222222
            22222222222222222222222222222d2222222222222222222222222222222222222ee21166666442222222222ddddd2222222222264222222222222222adddd2a2222222222222222222222222222222
            22222222222222222222222222dddd2222222222222222222222222222222222222ee11166666444222222222222ddd222222222222222222222222222addaaa22222222222222222222222222222222
            222222222222222222222222222dd22222222222222222222222222222222222222e111216666444422222222222ddd222222222222222222222222222aaaaa222222222222222222222222222222222
            222222222222222222222222222dd22222222222226666222222222222222222222e1121126664444222222222ddddd22222222222222222222222222222222222222222222222222222222222222222
            2222222222222222222222dddddd2222222222222222246662222222222222222222e1d124666644222222222222ddd22222222222222222222222222222222222222222222222222222222222222222
            222222222222222222222dddd22d2222222222222222244466222222222222222222e1dd24666644222222222222dd2222a2222222222222222222222222222222222222222222222222222222222222
            222222222222222222222dd2dd2dd222222222222222222444222222222222222222e11dd444444222222222222222222222222222222222222222222222222222222222222222222222222222222222
            22222222222222222222ddd22d222222222222222222222222222222222222222222e11dd222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
            22222222222222222222222222222222222222222222222222222222222222222222e1111222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
            22222222222222222222222222222222222222222222222222222222222222222222e2121222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
            22222222222222222222222222222222222222222222222222222222222222222222e2112222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
            22222222222222222222222222222222222222222222222222222222222222222222e2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
            2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222226666666222222222222222222222222
            2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222266666666662222222222222222222222
            2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222eeeeeeeeee22222222222222222222222222266666666666266662222222222222222
            2222222222222222222222222222222222666622222222222222222222222222222222222222222222222222222eeeeeeeeeeeeee2222222222222222222222266666666666266662222222222222222
            2222222222222222222222222666666626666662222222222222222222222222222222222222222222222222222ee11111eeeeeeeeeeeeeee22222222222222266444466666666666222222222222222
            2222222222222222222222266666666666666666222222222222222222222222222222222222222222222222222222d2d111eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee466666666666666662222222222
            2222222222222222222222666666666666666666662222222222222222222222222222222222222222222222222222ddddd11eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee144466666666666666622222222
            22222222222222222222226666666666666666666662222222222222222222222222222222222222222222222222222eddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee1dd6666666666666666666222222
            22222222222122222222664444444466666666666666662222222222222222222222222222222222222222222222222eeeeaaaeeeeeeaaaaaee1111111111111111ddd16666666666666666666666222
            22222222221122222222644eeeeee444444444444444666222222222222222222222222222222222222222222222222aaaaa22aaaaaa2222222222222222ddddddd26666666666666666666666666622
            222222222e2222222222646eeeeeeeeeeeeeee4444444662222222222222222222222222222222222222222222222222aaaaaaaaaaaaaaaaaaaaaaa22222222222226666666666666666666444444422
            222222222e12222222222eee11eeeeeeeeeeeeeeeee644422eeeeeeeeeeeeeeeee2222222222222222222222222222222222222222222222222222222222222222226666664444444444444666666622
            22222222ee12222222222eee1111eeeeeeeeeeeeeeee4444eeeeeeeeeeeeeeeeee2222222222222222222222222222222222222222222222222222222222222222226666646222222222222222222222
            222222eee2122222222222222211111eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee222222222222222222222222222222222222222222222222222222222222222226666442222222222222222222222
            222222eee11d222222222222222dddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee112222222222222222222222222222222222222222222222222222222222222222266422222222222222222222222
            222222e211d2222222222222222d222ddddeeeeeeeeeeeeeeeeeeeeeeeeeeeee11ddddd22222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
            222666611d22222222222222222222222222eeeeeeeeeeee11ee111111ddddd222222aa22222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
            2246666dd222222222222222222222222222222222211111111122ddd22222222aaaaa222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
            2246666666662222222222222222222222222222222111222ddd22222aaaaaaaa22222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
            22446666666642222222222222222222222222222222222222222aaaaa222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
            2244666666644aa2222222222222222222222222222222222222222222222222222226222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
            224466666644aa22222222222222222222222222222222222222222222222222222222442222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
            22246666644aa222222222222222222222222222222222222222222222222222222222422222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
            2224444444aa2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
            2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
            `)
    } else if (currentlevel == 2) {
    	
    } else {
    	
    }
}
let mySprite: Sprite = null
let currentlevel = 0
currentlevel = 1
checkLevel()
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 0)
mySprite.ay = 350
scene.cameraFollowSprite(mySprite)
