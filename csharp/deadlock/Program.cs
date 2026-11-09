var contexto = new ContextoUmaThread();

// Rede de segurança: se o programa travar, avisa depois de 3 segundos e encerra
_ = Task.Delay(3000).ContinueWith(_ =>
{
    Console.WriteLine("DEADLOCK confirmado");
    Environment.Exit(1);
});

contexto.Post(_ =>
{
    // TODO passo 3: chamar CalcularAsync(), pegar o valor com .Result e imprimir
    // TODO: depois de imprimir, chamar contexto.Encerrar()
    
    
    contexto.Encerrar();
}, null);

contexto.Executar();