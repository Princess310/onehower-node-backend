class BaseDao {
  constructor(entity) {
    this.entity = entity;
  }

  async get(id) {
    const item = await this.entity.findById(id);
    return item;
  }

  async create(model) {
    const item = await this.entity.create(model);
    return item;
  }

  async update(id, model) {
    const result = await this.entity.update(model, {
      where: {
        id,
      },
    });

    const item = await this.get(id);
    return item;
  }

  async delete(id) {
    const result = await this.entity.destroy({
      where: {
        id,
      },
    });

    return result;
  }

  async list(condition = {}, otherParams, page = 1, pageSize = 10, orderBy = 'ASC') {
    const result = await this.entity.findAndCountAll({
      where: condition,
      offset: (page - 1) * pageSize,
      limit: pageSize,
      order: [
        ['id', orderBy],
      ],
      ...otherParams,
    });

    const { rows, count } = result;
    const totalPage = Math.ceil(count / pageSize);

    return {
      list: rows,
      page: {
        currentPage: page,
        totalPage,
        count,
      },
    };
  }
};

module.exports = BaseDao;