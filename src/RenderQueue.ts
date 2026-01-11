// Add at the top of your file
class RenderQueue {
    private queue: Array<() => Promise<void>> = [];
    private running = 0;
    private maxConcurrent = 3; // Adjust based on performance

    async add<T>(task: () => Promise<T>): Promise<T> {
        return new Promise((resolve, reject) => {
            this.queue.push(async () => {
                try {
                    const result = await task();
                    resolve(result);
                } catch (error) {
                    reject(error);
                }
            });
            this.process();
        });
    }

    private async process() {
        if (this.running >= this.maxConcurrent || this.queue.length === 0) {
            return;
        }

        this.running++;
        const task = this.queue.shift();

        if (task) {
            await task();
            this.running--;
            this.process(); // Process next
        }
    }
}

export const renderQueue = new RenderQueue();