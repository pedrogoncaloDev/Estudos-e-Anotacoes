using System.Collections.Concurrent;

public class ContextoUmaThread : SynchronizationContext
{
    private readonly BlockingCollection<(SendOrPostCallback Acao, object? Estado)> _fila = new();

    public override void Post(SendOrPostCallback d, object? state) => _fila.Add((d, state));

    public void Executar()
    {
        SetSynchronizationContext(this);
        foreach (var (acao, estado) in _fila.GetConsumingEnumerable())
            acao(estado);
    }

    public void Encerrar() => _fila.CompleteAdding();
}