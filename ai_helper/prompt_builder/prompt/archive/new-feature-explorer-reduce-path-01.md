## 技术上下文

我们在开发一个 vscode 插件，其工程的文件夹树形结构如下：

```
{{ folder_tree }}
```

## 相关文件

{{#related_files_from }}
```yaml
- path: extension.js
  reader: all
- path: package.json
  reader: all
```
{{/related_files_from }}

## 任务

我希望文件树里，如果文件夹下有且只有一个文件夹，则以path形式显示为一个item，比如

```
.
└── src
    └── main
        └── java
```

显示为 src/main/java 以此类推，除非超过一个文件夹以外的子项。

### 典型case

给定结构：
```
.
├── HELP.md
├── config.yml
├── pom.xml
└── src
    ├── main
    │   ├── java
    │   │   └── dev
    │   │       └── jtong
    │   │           └── training
    │   │               └── demo
    │   │                   └── smart
    │   │                       └── domain
    │   │                           ├── MainApplication.java
    │   │                           ├── controllers
    │   │                           │   ├── JwtTokenController.java
    │   │                           │   ├── SelfController.java
    │   │                           │   ├── UsersController.java
    │   │                           │   ├── filter
    │   │                           │   │   └── JwtTokenFilter.java
    │   │                           │   ├── representation
    │   │                           │   │   ├── TokenRequest.java
    │   │                           │   │   ├── UserRole.java
    │   │                           │   │   └── UserVO.java
    │   │                           │   └── security
    │   │                           │       └── spring
    │   │                           │           ├── JwtAuthenticationEntryPoint.java
    │   │                           │           └── SecurityConfig.java
    │   │                           ├── persistent
    │   │                           │   ├── model
    │   │                           │   │   └── user
    │   │                           │   │       └── mybatis
    │   │                           │   │           ├── PasswordChangeRequest.java
    │   │                           │   │           ├── Role.java
    │   │                           │   │           ├── RoleMapper.java
    │   │                           │   │           ├── User.java
    │   │                           │   │           └── UserModelMapper.java
    │   │                           │   └── support
    │   │                           │       └── mybatis
    │   │                           │           └── IdHolder.java
    │   │                           └── service
    │   │                               └── JwtUtils.java
    │   └── resources
    │       ├── api
    │       │   └── doc
    │       │       └── user-api-specification.yaml
    │       ├── application.yml
    │       ├── db
    │       │   └── migration
    │       │       ├── V01__create_users.sql
    │       │       └── V02__create_roles.sql
    │       └── mybatis
    │           └── mapper
    │               ├── Mapper.xml
    │               └── Model.xml
    └── test
```
应显示为：
```
.
├── HELP.md
├── config.yml
├── pom.xml
└── src
    ├── main
    │   ├── java/dev/jtong/training/demo/smart/domain
    │   │   ├── MainApplication.java
    │   │   ├── controllers
    │   │   │   ├── JwtTokenController.java
    │   │   │   ├── SelfController.java
    │   │   │   ├── UsersController.java
    │   │   │   ├── filter
    │   │   │   │   └── JwtTokenFilter.java
    │   │   │   ├── representation
    │   │   │   │   ├── TokenRequest.java
    │   │   │   │   ├── UserRole.java
    │   │   │   │   └── UserVO.java
    │   │   │   └── security/spring
    │   │   │       ├── JwtAuthenticationEntryPoint.java
    │   │   │       └── SecurityConfig.java
    │   │   ├── persistent
    │   │   │   ├── model/user/mybatis
    │   │   │   │   ├── PasswordChangeRequest.java
    │   │   │   │   ├── Role.java
    │   │   │   │   ├── RoleMapper.java
    │   │   │   │   ├── User.java
    │   │   │   │   └── UserModelMapper.java
    │   │   │   └── support/mybatis
    │   │   │       └── IdHolder.java
    │   │   └── service
    │   │       └── JwtUtils.java
    │   └── resources
    │       ├── api/doc
    │       │   └── user-api-specification.yaml
    │       ├── application.yml
    │       ├── db/migration
    │       │   ├── V01__create_users.sql
    │       │   └── V02__create_roles.sql
    │       └── mybatis/mapper
    │           ├── Mapper.xml
    │           └── Model.xml
    └── test
```