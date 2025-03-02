### Cara Build Game Engine

1. Masuk ke dalam directory "tank-royale-0.30.0"
   ```
   cd tank-royale-0.30.0
   ```
2. (Clean &) Build **gui-app** dengan gradlew
   ```
   ./gradlew :gui-app:clean
   ./gradlew :gui-app:build
   ```
3. Executable Jar akan dibuat pada directory gui-app/build/libs. Jar dapat dijalankan dengan command berikut
   ```
   java -jar ./gui-app/build/libs/robocode-tankroyale-gui-0.30.0.jar
   ```

