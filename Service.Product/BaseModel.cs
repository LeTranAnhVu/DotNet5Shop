using System;

namespace Service.Product
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

    public class ModelId
    {
        private int id;

        public static implicit operator ModelId(int i)
        {
            return new ModelId {id=i};
        }

        public static implicit operator int(ModelId p)
        {
            return p.id;
        }
    }


    public abstract class BaseModel
    {
        public int Id { get; set; }
        public DateTime? CreatedAt { get; set; }
        public DateTime? UpdatedAt { get; set; }
    }
}