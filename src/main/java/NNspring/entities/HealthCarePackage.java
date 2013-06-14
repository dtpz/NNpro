package NNspring.entities;

import oracle.jrockit.jfr.openmbean.ProducerDescriptorType;

/**
 * Created with IntelliJ IDEA.
 * User: Etai
 * Date: 5/17/13
 * Time: 5:47 PM
 * To change this template use File | Settings | File Templates.
 */
public interface HealthCarePackage {

      public OrderLocation route(Product type);
}

class Medicaid implements HealthCarePackage{
    @Override
    public OrderLocation route(Product type) {
        return null;  //To change body of implemented methods use File | Settings | File Templates.
    }
}

class MedicareA implements HealthCarePackage{
    @Override
    public OrderLocation route(Product type) {
        return null;  //To change body of implemented methods use File | Settings | File Templates.
    }
}

class MedicareB implements HealthCarePackage{
    @Override
    public OrderLocation route(Product type) {
        return null;  //To change body of implemented methods use File | Settings | File Templates.
    }
}

class MedicareC extends MedicareB implements HealthCarePackage{
    @Override
    public OrderLocation route(Product type) {
        return null;  //To change body of implemented methods use File | Settings | File Templates.
    }
}