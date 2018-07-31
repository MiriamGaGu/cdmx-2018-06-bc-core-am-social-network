  it('debería exponer función computeStudentsStats en objeto global', () => {
    assert.isFunction(computeStudentsStats);
  });

  it('debería exponer función computeGenerationsStats en objeto global', () => {
    assert.isFunction(computeGenerationsStats);
  });

  it('debería exponer función sortStudents en objeto global', () => {
    assert.isFunction(sortStudents);
  });

  it('debería exponer función filterStudents en objeto global', () => {
    assert.isFunction(filterStudents);
  });