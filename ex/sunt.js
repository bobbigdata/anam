// Create a pulse queue
const pulseQueue = new PulseQueue();

// Add pulses to the queue
pulseQueue.enqueue(pulse1);
pulseQueue.enqueue(pulse2);
pulseQueue.enqueue(pulse3);

// Process the pulse queue asynchronously
pulseQueue.process().then(() => {
  console.log('All pulses have been completed');
});
