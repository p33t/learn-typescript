// From https://stackoverflow.com/a/39914235/358006
const sleep = (ms: number) =>
    new Promise((r) => setTimeout(r, ms))

test('elementary', async () => {
    // async await
    const p1 = new Promise<string>(async resolve => {
        await sleep(100)
        resolve('done')
    })
    expect(await p1).toBe('done')
    
    // 'then'
    const p2 = new Promise<string>(resolve =>
        sleep(100).then(() => resolve('done')))
    expect(await p2).toBe('done')
    
    await p2.then(s => expect(s).toBe('done'))
})

test('union types', async () => {
    
})