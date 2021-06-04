namespace MVCWebApp
{
    public class IdType<T>
    {
        protected T id;

        public static implicit operator IdType<T>(T i)
        {
            return new IdType<T> {id=i};
        }

        public static implicit operator T(IdType<T> p)
        {
            return p.id;
        }
    }

    public abstract class BaseModel
    {
        public IdType<int> Id { get; set; }
    }
}