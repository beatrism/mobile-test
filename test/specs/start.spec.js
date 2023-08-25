describe('Preencher o Formulario', () => {
    it('Primeiro Teste', async () => {
        await $('~Forms').click()
        await $('~text-input').setValue('Beatriz')
        expect(await $('~text-input')).toBeDisplayed()
        
    });
});
