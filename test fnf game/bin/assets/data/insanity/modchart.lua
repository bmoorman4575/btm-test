function start(song) -- do nothing

end

function update(elapsed)

end



function beatHit(beat) -- do nothing

end

function stepHit(step) -- do nothing

end

function playerTwoTurn()
    tweenCameraZoom(1.3,(crochet * 4) / 1000)
end

function playerTwoSing()
    FlxG.camera.shake(0.1, 0.1)
end


function playerOneTurn()
    tweenCameraZoom(1.4,(crochet * 4) / 1000)
end