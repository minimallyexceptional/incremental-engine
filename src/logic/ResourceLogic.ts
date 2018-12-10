export function gather (progress, in_progress, job_power, job_speed, callback) {
    let interval = setInterval (() => {
        console.log('Gathering...')
          if (progress < 100) {
              in_progress = true;
              progress += job_power;
          } else {
              in_progress = false;
              progress = 0;
              clearInterval(interval);
              callback()
          }
      }, job_speed * 100)
}