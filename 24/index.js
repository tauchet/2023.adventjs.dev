function getStaircasePaths(steps, maxJump) {
    function generateJumps(currentSequence) {
      if (currentSequence.reduce((sum, jump) => sum + jump, 0) === steps) {
        result.push([...currentSequence]);
        return;
      }
      for (let jump = 1; jump <= Math.min(maxJump, steps - currentSequence.reduce((sum, j) => sum + j, 0)); jump++) {
        currentSequence.push(jump);
        generateJumps(currentSequence);
        currentSequence.pop();
      }
    }
  
    const result = [];
    generateJumps([]);
    return result;
  }


console.log(getStaircasePaths(5, 2))