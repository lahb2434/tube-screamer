import React from 'react';

export default function AmpAndEffects() {
  return <div></div>;


}

 let context, tuna, output, tunaNode, previousNode;
        let nodeTypes = ['Cabinet', 'Chorus', 'Compressor', 'Convolver', 'Delay', 'Filter', 'Gain', 'Overdrive', 'Panner', 'Phaser', 'Tremolo', 'WahWah'];
        let nodes = [];

        const instantiatePedalSystem = () => {
          window.addEventListener('DOMContentLoaded', (event) => {
            context = new AudioContext();
            tuna = new Tuna(context);
            createPedals();
          })
        };

        instantiatePedalSystem();


        function start() {
            setupContext();
        }

        function createPedals() {
            nodeTypes.forEach(type => {
                if (type === "Cabinet") {    
                    tunaNode = new tuna[type]({ bypass: true, impulsePath: "../tuna/impulses/impulse_guitar.wav" });
                }
                else if (type === "Convolver") {
                    tunaNode = new tuna[type]({ bypass: true, impulse: "../tuna/impulses/ir_rev_short.wav" });
                } else {
                    tunaNode = new tuna[type]({ bypass: true });
                }; 

                // previousNode.connect(tunaNode);
                // previousNode = tunaNode;
                nodes.push(tunaNode);

                //Create UI controllers for each parameter
                let div = document.createElement("div");
                let elem, control;
                let effectLabel = document.createElement("label");
                div.className = 'pedal'
                div.style.backgroundColor = 'darkgray'; 
                effectLabel.textContent = type;
                div.appendChild(effectLabel);

                for (let val in tunaNode.defaults) {
                    control = document.createElement("div");
                    if (tunaNode.defaults[val].type === "boolean") {
                      elem = createCheckbox(tunaNode, val, tunaNode[val]);
                    } else if (tunaNode.defaults[val].type === "string") {
                      elem = createStringInput(tunaNode, val, tunaNode.defaults[val].value);
                    } else {
                      elem = createSlider(tunaNode, val, Math.min(tunaNode.defaults[val].min, 0), Math.max(tunaNode.defaults[val].max, tunaNode.defaults[val].value), tunaNode.defaults[val].value, tunaNode.defaults[val].type);
                    }
                    elem.forEach(el => control.appendChild(el));
                    div.appendChild(control);
                    }
                    document.body.appendChild(div);
                });
            }

        function playTrack() {
            // fetch("main_loop.wav")
            fetch("funk_guitar.wav")
            // fetch("aah.wav")
            // fetch("crazy.wav")
            // fetch("sine.wav")
                .then(res => res.arrayBuffer())
                .then(buffer => context.decodeAudioData(buffer))
                .then(buffer => {
                    let bufferSource = context.createBufferSource();
                    bufferSource.buffer = buffer;
                    bufferSource.loop = true;
                    
                    let input = context.createGain();
                    output = context.createGain();
                    previousNode = input;

                    nodes.forEach(tunaNode => {
                        previousNode.connect(tunaNode)
                        previousNode = tunaNode
                    })
                      
                    bufferSource.connect(input);
                    previousNode.connect(output);
                    output.connect(context.destination);
                    bufferSource.start(0);
                })
        }
        
        /*
            UI GENERATION
        */


    async function setupContext() {
      const guitar = await getGuitar()
      if (context.state === 'suspended') {
        await context.resume()
      }
      const source = context.createMediaStreamSource(guitar)
      
      previousNode = source
      nodes.forEach(tunaNode => {
          previousNode.connect(tunaNode)
          previousNode = tunaNode
      })
      previousNode.connect(context.destination)
        // .connect(bassEQ)
        // .connect(midEQ)
        // .connect(trebleEQ)
        // .connect(gainNode)
        // .connect(analyserNode)
        // .connect(context.destination)
    }

function getGuitar() {
  return navigator.mediaDevices.getUserMedia({
    audio: {
      echoCancellation: false,
      autoGainControl: false,
      noiseSuppression: false,
      latency: 0
    }
  })
}

        function createSlider(node, name, min, max, val, type) {
            let sliderLabel = document.createElement("label");
            sliderLabel.textContent = name;
            let slider = document.createElement("input");
            slider.type = "range";
            slider.min = min;
            slider.max = max;
            slider.value = val;
            slider.step = type === 'float' ? (max - min) / 1000 : 1;
            let valueLabel = document.createElement("span");
            valueLabel.innerText = val;
  
            slider.oninput = _ => {
                node[name] = type === 'float' ? parseFloat(slider.value) : parseInt(slider.value);
                valueLabel.innerText = slider.value;
            };
            return [sliderLabel, valueLabel, slider];
        }

        function createCheckbox(node, name, val) {
            let boxLabel = document.createElement("label");
            boxLabel.textContent = name;
            let box = document.createElement("input");
            box.type = "checkbox";
            box.checked = val;
            box.onchange = _ => node[name] = box.checked;

            return [boxLabel, box];
        }

        function createStringInput(node, name, val) {
            let stringInputLabel = document.createElement("label");
            stringInputLabel.textContent = name;
            let stringInput = document.createElement("input");
            stringInput.value = val;
            stringInput.onchange = _ => node[name] = stringInput.value;

            return [stringInputLabel, stringInput];
        }

