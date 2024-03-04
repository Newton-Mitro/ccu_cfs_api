using System;

public interface ILogger
{
    void Log(string message);
}

class FileLogger : ILogger
{
    public void Log(string message)
    {
        Console.WriteLine(message);
    }
}

class DatabaseLogger : ILogger
{
    public void Log(string message)
    {
        Console.WriteLine(message);
    }
}

class EmailLogger : ILogger
{
    public void Log(string message)
    {
        Console.WriteLine(message);
    }
}

static class LoggerFactory
{
    public static ILogger Create(string loggerType)
    {
        Type type = Type.GetType(loggerType);
        return (ILogger)Activator.CreateInstance(type);
    }
}

class Program
{
    static void Main(string[] args)
    {
        string className = nameof(EmailLogger);
        ILogger logger = LoggerFactory.Create(className);
        logger.Log(className + ": Log message.");
    }
}