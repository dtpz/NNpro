package NNspring.entities;

import org.springframework.beans.factory.annotation.Autowired;

/**
 * Created with IntelliJ IDEA.
 * User: Etai
 * Date: 5/17/13
 * Time: 7:30 PM
 * To change this template use File | Settings | File Templates.
 */
public class Product {


    private final long id;
    private String name;

    private ProductType type;

    private String category;
    private String department;
    private String subdepartment;

    public Product(long id) {
        this.id = id;
    }

    @Autowired
    public Product(long id, String name, ProductType type, String category, String department, String subdepartment) {
        this.id = id;
        this.name = name;
        this.type = type;
        this.category = category;
        this.department = department;
        this.subdepartment = subdepartment;
    }

    public Product(long id, String name, ProductType type) {
        this.id = id;
        this.name = name;
        this.type = type;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public ProductType getType() {
        return type;
    }

    public void setType(ProductType type) {
        this.type = type;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public String getDepartment() {
        return department;
    }

    public void setDepartment(String department) {
        this.department = department;
    }

    public String getSubdepartment() {
        return subdepartment;
    }

    public void setSubdepartment(String subdepartment) {
        this.subdepartment = subdepartment;
    }

    public String toString(){
        return this.id+"\t"+this.name+"   \t"+this.type+"\t\t"+this.department+"/"+this.subdepartment+"   \tCategory: "+this.category
                +"\n";
    }

}
