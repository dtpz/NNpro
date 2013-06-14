package NNspring.entities;

/**
 * Created with IntelliJ IDEA.
 * User: Etai
 * Date: 5/17/13
 * Time: 5:42 PM
 * To change this template use File | Settings | File Templates.
 */
public class Resident extends Person {
    private HealthCarePackage healthcare;

    public Resident(HealthCarePackage healthcare) {
        this.healthcare = healthcare;
    }

    public Resident(String lastName, String firstName, long id, HealthCarePackage healthcare) {
        super(lastName, firstName, id);
        this.healthcare = healthcare;
    }

    public Resident(String lastName, String firstName, HealthCarePackage healthcare) {
        super(lastName, firstName);
        this.healthcare = healthcare;
    }

    public HealthCarePackage getHealthcare() {
        return healthcare;
    }

    public void setHealthcare(HealthCarePackage healthcare) {
        this.healthcare = healthcare;
    }

    @Override
    public String toString() {
        return super.toString()+
                "\t healthcare:" + healthcare;
    }
}
