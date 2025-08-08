test('last value wins', async () => {
    const o1 = {a: 1}
    const o2 = {a: 11, b: 2}
    const o12 = {
        ...o1,
        ...o2
    }
    expect(o12.a).toBe(11)
    expect(o12.b).toBe(2)
    
    const o21 = {
        ...o2,
        ...o1
    }
    expect(o21.a).toBe(1)
})

test('undefined still counts', async () => {
    const o1 = {a: 1}
    const o2 = {a: undefined, b: 2}
    const o12 = {
        ...o1,
        ...o2
    }
    expect(o12.a).toBe(undefined)
    expect(o12.b).toBe(2)
})